import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
const EVENT_ENDPOINT = "https://event-booking-baf8d.firebaseio.com/events.json";
const BOOKING_ENDPOINT =
  "https://event-booking-baf8d.firebaseio.com/bookings.json";

@Injectable({ providedIn: "root" })
export class FirebaseService {
  events: any[] = [];
  bookings: any[] = [];

  constructor(private http: HttpClient, private authService: AuthService) {}

  /**
   * Get the events collection from firebase
   */
  getEventDetails() {
    return this.requestEventDetails();
  }

  private requestEventDetails() {
    let eventsArr = [];
    return this.http.get<Event[]>(EVENT_ENDPOINT).pipe(
      map(event => {
        for (let key in event) {
          eventsArr.push({ id: key, ...event[key] });
        }
        this.events = eventsArr;
        return eventsArr;
      })
    );
  }

  /**
   * Get individual event details
   */

  getIndividualEventDetails(id) {
    return this.events.find((ev: any) => ev.id === id);
  }

  /**
   * Get the bookings collection from firebase
   */

  getBookingDetails() {
    return this.requestBookingDetails().pipe(
      map(first => {
        let mappedArr = first.map(item => {
          let evDetails = this.events.find((ev: any) => ev.id === item.eventId);
          return { ...item, ev: evDetails };
        });
        return mappedArr;
      })
    );
  }

  private requestBookingDetails() {
    let bookingsArr = [];
    return this.http.get<Event[]>(BOOKING_ENDPOINT).pipe(
      map(event => {
        for (let key in event) {
          bookingsArr.push({ id: key, ...event[key] });
        }
        this.bookings = bookingsArr;
        return bookingsArr;
      })
    );
  }

  /**
   * Delete the event from firebase
   */

  deleteEvent(id) {
    return this.http.delete(
      `https://event-booking-baf8d.firebaseio.com/events/${id}.json`
    );
  }

  /**
   * Update an event in firebase
   */
  updateEventDetails(form, eventId) {
    return this.http.put(
      `https://event-booking-baf8d.firebaseio.com/events/${eventId}.json`,
      form
    );
  }

  /**
   * Book an event into firebase.
   */
  bookEvent(event) {
    return this.http.post(
      `https://event-booking-baf8d.firebaseio.com/bookings.json`,
      {
        eventId: event.id,
        userMail: "test@testcom"
      }
    );
  }

  /**
   * Check if an event is already booked, based on which
   * the button is disabled or not.
   */
  validateIfBooked(routeId): Observable<boolean> {
    return this.requestBookingDetails().pipe(
      map(booking => {
        return !!booking.find(item => item.eventId == routeId);
      })
    );
  }

  /**
   * Add a new event to firebase
   */

  addNewEvent(formVal) {
    return this.http.post(
      "https://event-booking-baf8d.firebaseio.com/events.json",
      formVal
    );
  }

  /**
   * Cancel an already booked event from firebase
   */

  cancelBookedEvent(event) {
    return this.requestBookingDetails().pipe(
      map(booking => {
        return booking.find(item => item.eventId == event.id).id;
      }),
      switchMap(bookingId => {
        return this.http.delete(
          `https://event-booking-baf8d.firebaseio.com/bookings/${bookingId}.json`
        );
      })
    );
  }
}

// When to use what:
// find => only return one value
// map => return array
// filter => return array , or atleast an empty array
