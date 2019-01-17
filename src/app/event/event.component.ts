import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { EventsListService } from "../services/events-list.service";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { FirebaseService } from "./../services/firebase.service";
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

  constructor(
    private fbService: FirebaseService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.currentId = this.route.snapshot.params["id"];
    this.currentEvent = this.fbService.getIndividualEventDetails(
      this.currentId
    )[0];
    this.latitude = this.currentEvent.location.lat;
    this.longitude = this.currentEvent.location.lng;
  }

  onBooking() {
    this.toastr.success(
      "Event Booking Success!. Check your mail for confirmation",
      "Booking Status"
    );
  }
}
