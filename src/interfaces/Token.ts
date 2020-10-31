export interface ITokenService {
  getToken(): string | null
  storeToken(token: string): void
  clearToken(): void
}

export interface ITokenData {
  Nome: string,
  Perfil: string
  Saldo: number,
  Hash?: string,
  token: string
}

export interface IToken {
  token: string,
  type: string
}