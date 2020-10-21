import { ITokenData } from "./Token";

export default interface IAPIHandler {
  login(email: string, password: string): Promise<ITokenData>;
}