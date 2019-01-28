import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  token;
  userMail;
  signup(email: string, password: string) {}
  signIn(email: string, password: string) {}
  getToken() {}
  isAuthenticated() {}
  getUser() {}
}
