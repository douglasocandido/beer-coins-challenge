import axios from "axios";
import IAPIHandler from "../interfaces/IAPIHandler";
import { ITokenData } from "../interfaces/Token";

interface AxiosResponse {
  data: any
}

export default class AxiosHandler implements IAPIHandler {
  instance: any

  constructor(baseURL: string){
    this.instance = axios.create({baseURL})
    
    this.instance.interceptors.response.use(function ({data}: AxiosResponse) {
      return data;
    }, function (error: any) {
      return Promise.reject(error);
    });
  }

  login(email: string, password: string): Promise<ITokenData> {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJyb2xlIjoiYWRtaW4ifQ.OINhRk6ZQWjVHSl8A_j8G-h7futKtqIEukNh5qLwu1E';
    return Promise.resolve({token, type: 'type'})
    // return this.instance.post('/login', {email, password})
  }

}