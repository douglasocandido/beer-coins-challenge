import axios, { AxiosError, AxiosInstance } from "axios";
import IAPIHandler from "../interfaces/IAPIHandler";
import { IToken, ITokenData } from "../interfaces/Token";
import { Conta } from "../interfaces/Conta";
import jwt_decode from "jwt-decode";

export default class AxiosHandler implements IAPIHandler {
  private instance: AxiosInstance;
  private interceptor: any;

  constructor(baseURL: string){
    this.instance = axios.create({baseURL});
    this.setInterceptor();
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
          window.localStorage.clearStorage();
          console.log('unauthorized');
          // TODO: redirect to login
        }

        return Promise.reject(error);
      }
    );
  }

  setToken(token: string) {
    this.instance.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
    this.storeToken(token);
  }

  storeToken(token: string) {
    window.localStorage.setItem('token', token);
  }

  async login(email: string, password: string): Promise<ITokenData> {
    const { data } = await this.instance.post<IToken>('/login', {email, password});
    const { token } = data;

    this.setToken(token);
    return jwt_decode(token);
  }

  async listaContas(): Promise<Conta[]> {
    return Promise.resolve([
      {
        "hash": "582969df5a77006e13731ed15ec58587",
        "saldo": 210,
        "nome": "Jonas",
        "email": "jonas@email.com",
        "cnpj": "01.234.567/0001-89"
      },
      {
        "hash": "247114914379014f9297d74fad0335fd",
        "saldo": 0,
        "nome": "rodrigo",
        "email": "rodrigo@rodrigo.com",
        "cnpj": "12345678910"
      }
    ])
  }

}