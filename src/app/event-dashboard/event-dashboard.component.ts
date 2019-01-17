import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "./../services/firebase.service";

@Component({
  selector: "app-event-dashboard",
  templateUrl: "./event-dashboard.component.html",
  styleUrls: ["./event-dashboard.component.scss"]
})
export class EventDashboardComponent implements OnInit {
  constructor(private fbService: FirebaseService) {}

  ngOnInit() {}

  formCompleteHandle(form) {
    this.fbService.saveEventDetails(form).subscribe(data => console.log(data));
  }
}
