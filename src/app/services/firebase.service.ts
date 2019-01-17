import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";

const ENDPOINT_URL = "https://event-booking-baf8d.firebaseio.com/events.json";

@Injectable()
export class FirebaseService {
  events: any[] = [];
  constructor(private http: HttpClient) {
    this.getEventDetails();
  }

  getEventDetails() {
    let eventsArr = [];
    return this.http.get<any[]>(ENDPOINT_URL).pipe(
      map(event => {
        for (let key in event) {
          eventsArr.push({ id: key, ...event[key] });
        }
        this.events = eventsArr;
        return eventsArr;
      })
    );
  }
  getIndividualEventDetails(id) {
    return this.events.filter(event => event.id === id);
  }
  saveEventDetails(form) {
    return this.http.post(ENDPOINT_URL, form);
  }
}
