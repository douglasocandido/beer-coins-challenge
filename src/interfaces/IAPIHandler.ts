import { AxiosResponse } from "axios";
import { IConta, IFormConta, IFormContaResponse } from "./Conta";
import { IDepositoForm } from "./Deposito";
import { IExtratoForm } from "./Extrato";
import { ITokenData } from "./Token";
import { ITransferenciaForm } from "./Transferencia";

export default interface IAPIHandler {
  login(email: string, password: string): Promise<ITokenData>;
  criaConta(conta: IFormConta): Promise<IFormContaResponse>;
  listaContas(): Promise<IConta[]>;
  getSaldo(): Promise<AxiosResponse>;
  extrato(form: IExtratoForm): Promise<AxiosResponse>;
  transferencia(form: ITransferenciaForm): Promise<AxiosResponse>;
  deposito(form: IDepositoForm): Promise<AxiosResponse>;
}