import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import IAPIHandler from "../interfaces/IAPIHandler";
import { IToken, ITokenData, ITokenService } from "../interfaces/Token";
import { IConta, IContaResponse, IFormConta, IFormContaResponse } from "../interfaces/Conta";
import { TokenService } from "./TokenService";
import { IDepositoForm } from "../interfaces/Deposito";
import { ITransferenciaForm } from "../interfaces/Transferencia";
import { IExtratoForm, IExtrato, IExtratoResponse } from "../interfaces/Extrato";
import { ISaldo } from "../interfaces/Saldo";
import { IProduct, IProductResponse,IProductPagination } from "../interfaces/Product";

export default class AxiosHandler implements IAPIHandler {
  private instance: AxiosInstance;
  private interceptor: any;

  constructor(baseURL: string, private tokenService: ITokenService) {
    this.instance = axios.create({baseURL});
    this.setInterceptor();
    const token = this.tokenService.getToken();
    if (token) this.setToken(token);
    else this.resetToken();
  }

  setInterceptor() {
    const clearInterceptor = () => {
      if (this.interceptor) {
        this.instance.interceptors.response.eject(this.interceptor);
      }
      this.interceptor = null;
    }

    this.interceptor = this.instance.interceptors.response.use(
      response => response,
      (error: AxiosError) => {
        const isUnauthorized = error.response && error.response.status === 401;
        const isForbidden = error.response && error.response.status === 403;

        if (isUnauthorized || isForbidden) {
          clearInterceptor();
          this.resetToken();
          console.log('unauthorized');
          window.location.reload();
        }

        return Promise.reject(error);
      }
    );
  }

  setToken(token: string) {
    this.instance.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
  }

  resetToken(): void {
    delete this.instance.defaults.headers.common["Authorization"];
    this.tokenService.clearToken();
  }

  async login(email: string, password: string): Promise<ITokenData> {
    const { data } = await this.instance.post<IToken>('/login', { email, password });
    const { token } = data;

    this.setToken(token);
    this.tokenService.storeToken(token);
    return TokenService.decodeToken<ITokenData>(token);
  }

  async listaContas(page: number = 0, pageSize: number = 10): Promise<IConta[]> {
    const { data } = await this.instance.get<IContaResponse>(`/conta?page=${page}&size=${pageSize}`);
    return data.content;
  }

  async extrato(filters: IExtratoForm): Promise<IExtrato[]> {
    let operationFilter = '';
    if(filters.tipoOperacao) {
      operationFilter = `&tipoOperacao=${filters.tipoOperacao}`
    }
    const { data } = await this.instance.get<IExtratoResponse>(`/conta/extrato?page=${filters.page}&size=${filters.pageSize}${operationFilter}`);
    return data.content;
  }

  async criaConta(conta: IFormConta): Promise<IFormContaResponse> {
    const { data } = await this.instance.post<IFormContaResponse>(`/conta`, conta);
    return data;
  }

  async getSaldo(): Promise<ISaldo> {
    const { data } = await this.instance.get<ISaldo>(`/conta/saldo`);
    return data;
  }

  async getProducts(pagination: IProductPagination): Promise<IProduct[]> {
    const {page, pageSize} = pagination;
    const { data } = await this.instance.get<IProductResponse>(`/product?page=${page}&size=${pageSize}`);
    return data.content;
  }

  transferencia(form: ITransferenciaForm): Promise<AxiosResponse> {
    return this.instance.post(`/conta/transferencia`, form);
  }

  deposito(form: IDepositoForm): Promise<AxiosResponse> {
    return this.instance.post(`/conta/deposito`, form);
  }

  rewardProduct(productId: number): Promise<AxiosResponse> {
    return this.instance.post(`/product/reward/${productId}`)
  }

}