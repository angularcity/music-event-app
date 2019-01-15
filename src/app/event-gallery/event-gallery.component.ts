import { Component, OnInit } from "@angular/core";
import { EventsListService } from "../services/events-list.service";

@Component({
  selector: "app-event-gallery",
  templateUrl: "./event-gallery.component.html",
  styleUrls: ["./event-gallery.component.scss"]
})
export class EventGalleryComponent implements OnInit {
  events = [];
  constructor(private eventsListService: EventsListService) {}
  ngOnInit() {
    this.eventsListService
      .getEventList()
      .subscribe(data => (this.events = data));
  }
}
