import { Component, OnInit, ViewContainerRef } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { FirebaseService } from "src/app/services/firebase.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.scss"]
})
export class EventComponent implements OnInit {
  currentId;
  currentEvent;
  latitude = 0;
  longitude = 0;
  isBtnDisabled$: Observable<boolean>;

  constructor(
    private fbService: FirebaseService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.currentId = this.route.snapshot.params["id"];

    this.currentEvent = this.fbService.getIndividualEventDetails(
      this.currentId
    );

    this.isBtnDisabled$ = this.fbService.validateIfBooked(this.currentId);
  }

  onBooking() {
    this.fbService.bookEvent(this.currentEvent).subscribe(success => {
      this.toastr.success(
        "Event Booking Success!. Check your mail for confirmation",
        "Booking Status"
      );
    });
  }
}
