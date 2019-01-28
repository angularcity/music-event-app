import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import {
  map,
  tap,
  filter,
  shareReplay,
  share,
  switchMap,
  withLatestFrom
} from "rxjs/operators";
import { of, forkJoin, Observable, ReplaySubject } from "rxjs";
import { AuthService } from "./auth.service";
const EVENT_ENDPOINT = "https://event-booking-baf8d.firebaseio.com/events.json";
const BOOKING_ENDPOINT =
  "https://event-booking-baf8d.firebaseio.com/bookings.json";
import * as _ from "lodash";

@Injectable({ providedIn: "root" })
export class FirebaseService {
  private eventsCache$: Observable<Array<Event>>;
  private bookingCache$: Observable<any[]>;
  eventsArr: any[] = [];
  bookingsArr: any[] = [];
  loaded = false;
  constructor(private http: HttpClient, private authService: AuthService) {}

  getEventDetails() {
    if (!this.eventsCache$) {
      this.eventsCache$ = this.requestEventDetails().pipe(shareReplay(1));
    }

    return this.eventsCache$;
  }

  private requestEventDetails() {
    return this.http
      .get<Event[]>(EVENT_ENDPOINT)
      .pipe(map(data => _.values(data)));
  }

  getIndividualEventDetails(id) {
    this.eventsCache$.subscribe((events: Event[]) => {
      this.eventsArr = events;
    });
    return this.eventsArr.find(e => e.id == id);
  }

  getBookingDetails() {
    if (!this.bookingCache$) {
      this.bookingCache$ = this.requestBookingDetails().pipe(
        withLatestFrom(this.eventsCache$),
        map(([first, second]) => {
          console.log(first);
          console.log(second);
        })
      );
    }
    //return this.bookingCache$;
  }

  private requestBookingDetails() {
    return this.http
      .get<Event[]>(BOOKING_ENDPOINT)
      .pipe(map(data => _.values(data)));
  }

  updateEventDetails(form, eventId) {}

  saveEventDetails(form) {}

  bookEvent(event) {}
  getBookingEvent() {}
  setAllBookedEvents(events) {}
  getAllBookedEvents() {}
}
