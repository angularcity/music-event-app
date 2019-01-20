import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";

@Component({
  selector: "app-bookings",
  templateUrl: "./bookings.component.html",
  styleUrls: ["./bookings.component.scss"]
})
export class BookingsComponent implements OnInit {
  userMail;
  bookEventsIdArr = [];
  bookEvents = [];
  constructor(private auth: AuthService, private fbService: FirebaseService) {}

  ngOnInit() {
    this.fbService.getBookingEvent().subscribe(event => {
      for (let key in event) {
        if (this.auth.userMail === event[key].userMail) {
          this.bookEventsIdArr.push(event[key].eventId);
        }
      }
      this.bookEventsIdArr.forEach(eventId => {
        this.bookEvents.push(
          this.fbService.getIndividualEventDetails(eventId)[0]
        );

        this.fbService.setAllBookedEvents(this.bookEvents);
      });
    });
  }
}
