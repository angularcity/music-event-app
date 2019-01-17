import { Injectable } from "@angular/core";


import { Observable } from "rxjs";

import { switchMap } from "rxjs/operators";
import { of } from "rxjs/observable/of";
import { User } from "../models/events";

@Injectable()
export class AuthService {
  user$: Observable<User>;

  constructor() {
    // this.user$ = this.afAuth.authState.pipe(
    //   switchMap(user => {
    //     if (user) {
    //       return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
    //     } else {
    //       return of(null);
    //     }
    //   })
    // );
  }

  

  

  

  
}
