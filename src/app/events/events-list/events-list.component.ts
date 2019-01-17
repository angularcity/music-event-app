import { Component, OnInit } from "@angular/core";
import { EventsListService } from "src/app/services/events-list.service";
import { FirebaseService } from "src/app/services/firebase.service";

@Component({
  selector: "app-events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.scss"]
})
export class EventsListComponent implements OnInit {
  events = [];
  searchFilter: any = { name: "" };
  constructor(private fbService: FirebaseService) {}
  ngOnInit() {
    this.fbService.getEventDetails().subscribe(data => {
      this.events = data;
    });
  }
  onSearchChange(val) {
    this.searchFilter.name = val;
  }
}
