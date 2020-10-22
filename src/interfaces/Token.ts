export interface ITokenData {
  Name: string,
  Perfil: string
  exp: number,
  iat: number,
  sub: number,
}

export interface IToken {
  token: string,
  type: string
}