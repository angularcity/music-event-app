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
    this.fbService.getBookingDetails().subscribe(data => {
      console.log("receiving");
      console.log(data);
    });
  }
}
