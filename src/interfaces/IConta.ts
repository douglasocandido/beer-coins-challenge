export interface IConta {
  hash: string
  saldo: number
  nome: string
  email: string
  cnpj: string
}

export interface IContaResponse {
  content: IConta[]
}