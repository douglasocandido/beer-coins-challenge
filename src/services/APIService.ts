import { AxiosResponse } from "axios";
import { IConta, IFormConta, IFormContaResponse } from "../interfaces/Conta";
import { IDepositoForm } from "../interfaces/Deposito";
import { IExtrato, IExtratoForm } from "../interfaces/Extrato";
import IAPIHandler from "../interfaces/IAPIHandler";
import { ITokenData } from "../interfaces/Token";

export default class APIService {
  constructor(
    public apiAccess: IAPIHandler
  ) { }

  login(email: string, password: string): Promise<ITokenData> {
    return this.apiAccess.login(email, password);
  }

  listaContas(): Promise<IConta[]> {
    return this.apiAccess.listaContas();
  }

  extrato(filters: IExtratoForm): Promise<IExtrato[]> {
    return this.apiAccess.extrato(filters);
  }

  criaConta(conta: IFormConta): Promise<IFormContaResponse> {
    return this.apiAccess.criaConta(conta);
  }

  deposito(form: IDepositoForm): Promise<AxiosResponse> {
    return this.apiAccess.deposito(form);
  }
}