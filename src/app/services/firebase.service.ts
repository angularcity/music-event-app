import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";
import { of } from "rxjs";
import { AuthService } from "./auth.service";
const ENDPOINT_URL = "https://event-booking-baf8d.firebaseio.com/events.json";

@Injectable({ providedIn: "root" })
export class FirebaseService {
  events: any[] = [];
  allBooked = [];
  loaded = false;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.getEventDetails();
  }

  getEventDetails() {
    const token = this.authService.getToken();
    let eventsArr = [];
    if (!this.loaded) {
      return this.http
        .get<any[]>(
          `https://event-booking-baf8d.firebaseio.com/events.json?auth=${token}`
        )
        .pipe(
          map(event => {
            for (let key in event) {
              eventsArr.push({ id: key, ...event[key] });
            }
            this.events = eventsArr;
            this.loaded = true;
            return eventsArr;
          })
        );
    } else {
      return of(this.events);
    }
  }

  getIndividualEventDetails(id) {
    return this.events.filter(event => event.id === id);
  }
  updateEventDetails(form, eventId) {
    const token = this.authService.getToken();
    return this.http.put(
      `https://event-booking-baf8d.firebaseio.com/events/${eventId}.json?auth=${token}`,
      form
    );
  }

  saveEventDetails(form) {
    const token = this.authService.getToken();
    return this.http.post(
      `https://event-booking-baf8d.firebaseio.com/events.json?auth=${token}`,
      form
    );
  }

  bookEvent(event) {
    const token = this.authService.getToken();
    return this.http.post(
      `https://event-booking-baf8d.firebaseio.com/bookings.json?auth=${token}`,
      {
        eventId: event.id,
        userMail: this.authService.userMail
      }
    );
  }
  getBookingEvent() {
    const token = this.authService.getToken();
    return this.http.get<any>(
      `https://event-booking-baf8d.firebaseio.com/bookings.json?auth=${token}`
    );
  }
  setAllBookedEvents(events) {
    this.allBooked = events;
  }
  getAllBookedEvents() {
    return this.allBooked;
  }
}
