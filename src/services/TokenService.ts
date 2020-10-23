import jwt_decode from "jwt-decode";
import { ITokenService } from "../interfaces/Token";

const TOKEN_KEY = 'token'

export class TokenService implements ITokenService {
  private token: string | null;

  constructor(private store: Storage) {
    this.token = this.restoreToken();
    this.restoreToken();
  }

  getToken(): string | null {
    return this.token;
  }

  clearToken() {
    return this.store.removeItem(TOKEN_KEY);
  }

  storeToken(token: string) {
    this.store.setItem(TOKEN_KEY, token)
  }

  private restoreToken(): string | null {
    return this.store.getItem(TOKEN_KEY)
  }

  static decodeToken<T>(token: string): T {
    return jwt_decode(token)
  }
}