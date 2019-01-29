import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-event-dashboard",
  templateUrl: "./event-dashboard.component.html",
  styleUrls: ["./event-dashboard.component.scss"]
})
export class EventDashboardComponent implements OnInit {
  viewMode = "ADD";
  constructor(private fbService: FirebaseService, private router: Router) {}

  ngOnInit() {}

  setView(mode) {
    this.viewMode = mode;
  }

  formCompleteHandle(formVal) {
    this.fbService.addNewEvent(formVal).subscribe(data => {
      console.log("New form is added");
      this.router.navigate(["/"]);
    });
  }
}
