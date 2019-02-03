import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState } from "./../../store/index";
import * as eventActions from "../../store/actions";
@Component({
  selector: "app-event-gallery",
  templateUrl: "./event-gallery.component.html",
  styleUrls: ["./event-gallery.component.scss"]
})
export class EventGalleryComponent implements OnInit {
  events$: Observable<Event[]>;
  constructor(
    private fbService: FirebaseService,
    private store: Store<AppState>
  ) {}
  ngOnInit() {
    this.events$ = this.fbService.getEventDetails();
    // this.store.dispatch(new eventActions.LoadAllEvents());
  }
}
