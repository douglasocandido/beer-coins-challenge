export interface IConta {
  hash: string
  saldo: number
  nome: string
  email: string
  cnpj: string
}

export interface IFormConta {
  nome: string
  email: string
  cnpj: string
  senha: string
}

export interface IFormContaResponse extends IConta {
  id: string
  senha: string
  profiles: IProfile[]
}

export interface IProfile {
  id: string
  name: string
}

export interface IContaResponse {
  content: IConta[]
}