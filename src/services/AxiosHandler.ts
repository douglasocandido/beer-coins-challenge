import axios, { AxiosError, AxiosInstance } from "axios";
import IAPIHandler from "../interfaces/IAPIHandler";
import { IToken, ITokenData, ITokenService } from "../interfaces/Token";
import { IConta, IContaResponse } from "../interfaces/IConta";
import { TokenService } from "./TokenService";

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
          // TODO: redirect to login
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

}