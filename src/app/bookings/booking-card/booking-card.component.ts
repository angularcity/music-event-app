import { Component, OnInit, Input } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-booking-card",
  templateUrl: "./booking-card.component.html",
  styleUrls: ["./booking-card.component.scss"]
})
export class BookingCardComponent {
  @Input() booking;
  constructor(private fbService: FirebaseService, private router: Router) {}

  ngOnInit() {}

  cancel(event) {
    this.fbService.cancelBookedEvent(event).subscribe(success => {
      console.log("Successfully deleted");
      this.router.navigate(["/"]);
    });
  }
}
