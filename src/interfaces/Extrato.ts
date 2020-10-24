export interface IExtrato {
  dataHora: string
  nomeContaOrigemOuDestino: number
  tipo: string
  valor: number
}

export interface IExtratoForm {
  tipoOperacao?: string
  pageSize?: number
  page?: number
}

export interface IExtratoResponse {
  content: IExtrato[]
}