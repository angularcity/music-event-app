import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { EventsListService } from "../services/events-list.service";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.scss"]
})
export class EventComponent implements OnInit {
  currentId;
  currentEvent = {};

  constructor(
    private eventService: EventsListService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.currentId = this.route.snapshot.params["id"];
    this.eventService.getEvent(this.currentId).subscribe(data => {
      this.currentEvent = data[0];
    });
  }

  onBooking() {
    this.toastr.success(
      "Event Booking Success!. Check your mail for confirmation",
      "Booking Status"
    );
  }
}
