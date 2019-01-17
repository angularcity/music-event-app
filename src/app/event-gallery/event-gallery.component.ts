import { Component, OnInit } from "@angular/core";
import { EventsListService } from "../services/events-list.service";
import { FirebaseService } from "./../services/firebase.service";

@Component({
  selector: "app-event-gallery",
  templateUrl: "./event-gallery.component.html",
  styleUrls: ["./event-gallery.component.scss"]
})
export class EventGalleryComponent implements OnInit {
  events = [];
  constructor(private fbService: FirebaseService) {}
  ngOnInit() {
    this.fbService.getEventDetails().subscribe(data => {
      this.events = data;
    });
  }
}
