import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";
import { of } from "rxjs";
const ENDPOINT_URL = "https://event-booking-baf8d.firebaseio.com/events.json";

@Injectable({ providedIn: "root" })
export class FirebaseService {
  events: any[] = [];
  loaded = false;
  constructor(private http: HttpClient) {
    this.getEventDetails();
  }

  getEventDetails() {
    let eventsArr = [];
    if (!this.loaded) {
      return this.http.get<any[]>(ENDPOINT_URL).pipe(
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
    return this.http.put(
      `https://event-booking-baf8d.firebaseio.com/events/${eventId}.json`,
      form
    );
  }

  saveEventDetails(form) {
    return this.http.post(
      `https://event-booking-baf8d.firebaseio.com/events.json`,
      form
    );
  }
}
