import { Component, OnInit } from "@angular/core";
import { EventsListService } from "src/app/services/events-list.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.scss"]
})
export class EventsListComponent implements OnInit {
  //events = [];
  events$: Observable<Event[]>;
  searchFilter: any = { name: "" };
  constructor(private fbService: FirebaseService) {}
  ngOnInit() {
    this.events$ = this.fbService.getEventDetails();
    const bArr = this.fbService.getAllBookedEvents();

    //this.events = this.events.filter(value => -1 === bArr.indexOf(value));
    //this.events = this.events.includes()
  }
  onSearchChange(val) {
    this.searchFilter.name = val;
  }
}
