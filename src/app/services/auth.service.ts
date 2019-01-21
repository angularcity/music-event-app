import { Injectable } from "@angular/core";
import * as firebase from "firebase";

@Injectable()
export class AuthService {
  token;
  userMail;
  signup(email: string, password: string) {
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .catch(error => console.log(error));
  }
  signIn(email: string, password: string) {
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then(response => {
    //     this.userMail = response.user.email;
    //     firebase
    //       .auth()
    //       .currentUser.getIdToken()
    //       .then(token => (this.token = token));
    //   });
  }
  getToken() {
    // firebase
    //   .auth()
    //   .currentUser.getIdToken()
    //   .then(token => (this.token = token));
    // return this.token;
  }
  isAuthenticated() {
    // return this.token != null;
  }
  getUser() {
    // return this.userMail;
  }
}
