import { IConta } from "./IConta";
import { ITokenData } from "./Token";

export default interface IAPIHandler {
  login(email: string, password: string): Promise<ITokenData>;
  listaContas(): Promise<IConta[]>;
}