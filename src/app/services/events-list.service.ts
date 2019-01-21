import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";
import { Event } from "./../models/events";
@Injectable()
export class EventsListService {
  constructor() {}

  // getEventList(): Observable<Event[]> {
  //   // return of(EVENTS_LIST);
  // }
  // getEvent(id): Observable<any> {
  //   // return of(EVENTS_LIST.filter(item => item.id == id));
  // }
}
