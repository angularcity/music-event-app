import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as eventActions from "../actions";
import { tap, take, mergeMap, map, catchError } from "rxjs/operators";

import { of } from "rxjs";
import { FirebaseService } from "src/app/services/firebase.service";

@Injectable()
export class EventsEffects {
  @Effect({ dispatch: false })
  loadAllEventsOnLoad$ = this.actions$.pipe(
    tap(() => console.log("events effect init")),
    ofType(eventActions.EventsActionTypes.LoadAllEvents),
    mergeMap(action => this.fbService.getEventDetails()),
    map((courses: Event[]) => {
      console.log(courses);
      //new eventActions.LoadAllEventsSuccess(courses);
    }),
    catchError(err => of("Error in fetching details >>>>"))
  );
  constructor(private actions$: Actions, private fbService: FirebaseService) {}
}
