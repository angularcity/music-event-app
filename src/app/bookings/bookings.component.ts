import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-bookings",
  templateUrl: "./bookings.component.html",
  styleUrls: ["./bookings.component.scss"]
})
export class BookingsComponent implements OnInit {
  bookedArr$: Observable<any>;
  constructor(private auth: AuthService, private fbService: FirebaseService) {}

  ngOnInit() {
    this.bookedArr$ = this.fbService.getBookingDetails();
  }
}
