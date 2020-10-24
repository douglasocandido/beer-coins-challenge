import { AxiosResponse } from "axios";
import { IConta, IFormConta, IFormContaResponse } from "./Conta";
import { IDepositoForm } from "./Deposito";
import { ITokenData } from "./Token";
import { ITransferenciaForm } from "./Transferencia";
import { IExtrato, IExtratoForm } from "./Extrato";

export default interface IAPIHandler {
  login(email: string, password: string): Promise<ITokenData>;
  criaConta(conta: IFormConta): Promise<IFormContaResponse>;
  listaContas(): Promise<IConta[]>;
  extrato(filters: IExtratoForm): Promise<IExtrato[]>;
  getSaldo(): Promise<AxiosResponse>;
  transferencia(form: ITransferenciaForm): Promise<AxiosResponse>;
  deposito(form: IDepositoForm): Promise<AxiosResponse>;
}