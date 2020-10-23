export interface ITokenService {
  getToken(): string | null
  storeToken(token: string): void
  clearToken(): void
}

export interface ITokenData {
  Nome: string,
  Perfil: string
  exp?: number,
  iat?: number,
  sub?: number,
}

export interface IToken {
  token: string,
  type: string
}