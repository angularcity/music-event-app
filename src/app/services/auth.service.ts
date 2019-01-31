import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, BehaviorSubject } from "rxjs";
import { User } from "../models/events";

const API_KEY = "AIzaSyCsXcKc15exyOf5rypRA25UsiuSgJblvsM";

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable()
export class AuthService {
  private _user = new BehaviorSubject<User>(null);
  private _tokenExpirationTimer: number;

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }

  // signUp(email: string, password: string) {
  //   return this.http
  //     .post<AuthResponseData>(
  //       `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`,
  //       {
  //         email: email,
  //         password: password,
  //         returnSecureToken: true
  //       }
  //     )
  //     .pipe(
  //       catchError(errResponse => {
  //         this.handleError(errResponse.error.error.message);
  //         return throwError(errResponse);
  //       }),
  //       tap(resData => {
  //         if (resData && resData.idToken) {
  //           this.handleLogin(
  //             email,
  //             resData.idToken,
  //             resData.localId,
  //             parseInt(resData.expiresIn)
  //           );
  //         }
  //       })
  //     );
  // }

  // private handleLogin(email, token, userId, expiresIn: number) {
  //   const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  //   const user = new User(email, userId, token, expirationDate);
  //   localStorage.setItem("userData", JSON.stringify(user));
  //   this.autoLogout(user.timeToExpiry);
  //   this._user.next(user);
  // }

  // autoLogout(expiryDuration: number) {
  //   // this._tokenExpirationTimer = setTimeout(
  //   //   () => this.logout(),
  //   //   expiryDuration
  //   // );
  // }

  // private handleError(msg: string) {
  //   switch (msg) {
  //     case "EMAIL_EXISTS":
  //       alert("address exists");
  //       break;
  //     case "INVALID_PASSWORD":
  //       alert("password invalid");
  //       break;
  //     default:
  //       alert("Auth failed.");
  //   }
  // }
}
