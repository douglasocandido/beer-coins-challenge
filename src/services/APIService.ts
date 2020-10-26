import { AxiosResponse } from "axios";
import { IConta, IFormConta, IFormContaResponse } from "../interfaces/Conta";
import { IProduct,IProductPagination} from "../interfaces/Product";
import { IDepositoForm } from "../interfaces/Deposito";
import { IExtrato, IExtratoForm } from "../interfaces/Extrato";
import IAPIHandler from "../interfaces/IAPIHandler";
import { ISaldo } from "../interfaces/Saldo";
import { ITokenData } from "../interfaces/Token";
import { ITransferenciaForm } from '../interfaces/Transferencia';

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

  transferencia(form: ITransferenciaForm): Promise<AxiosResponse>{
    return this.apiAccess.transferencia(form);
  }
 
  getSaldo(): Promise<ISaldo> {
    return this.apiAccess.getSaldo();
  }

  getProducts(pagination:IProductPagination): Promise<IProduct[]> {
    return this.apiAccess.getProducts(pagination);
  }

  rewardProduct(id: number):Promise<AxiosResponse>{
    return this.apiAccess.rewardProduct(id)
  }

}