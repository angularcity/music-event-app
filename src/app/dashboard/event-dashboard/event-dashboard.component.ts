import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";

@Component({
  selector: "app-event-dashboard",
  templateUrl: "./event-dashboard.component.html",
  styleUrls: ["./event-dashboard.component.scss"]
})
export class EventDashboardComponent implements OnInit {
  viewMode = "ADD";
  constructor(private fbService: FirebaseService) {}

  ngOnInit() {}

  setView(mode) {
    this.viewMode = mode;
  }

  formCompleteHandle(form) {
    this.fbService.saveEventDetails(form).subscribe(data => console.log(data));
  }
}
