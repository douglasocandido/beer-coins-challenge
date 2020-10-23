import { IConta, IFormConta, IFormContaResponse } from "./Conta";
import { ITokenData } from "./Token";

export default interface IAPIHandler {
  login(email: string, password: string): Promise<ITokenData>;
  criaConta(conta: IFormConta): Promise<IFormContaResponse>;
  listaContas(): Promise<IConta[]>;
}