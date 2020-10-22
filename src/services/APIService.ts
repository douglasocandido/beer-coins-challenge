import { Conta } from "../interfaces/Conta";
import IAPIHandler from "../interfaces/IAPIHandler";
import { ITokenData } from "../interfaces/Token";

export default class APIService {
  constructor(
    public apiAccess: IAPIHandler
  ) { }

  login(email: string, password: string): Promise<ITokenData> {
    return this.apiAccess.login(email, password);
  }

  listaContas(): Promise<Conta[]> {
    return this.apiAccess.listaContas();
  }
}