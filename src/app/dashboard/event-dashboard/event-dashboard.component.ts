import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { Router } from "@angular/router";
import { NotifyService } from "src/app/shared/notify/notify.service";

@Component({
  selector: "app-event-dashboard",
  templateUrl: "./event-dashboard.component.html",
  styleUrls: ["./event-dashboard.component.scss"]
})
export class EventDashboardComponent implements OnInit {
  viewMode = "ADD";
  constructor(
    private fbService: FirebaseService,
    private router: Router,
    private notifyService: NotifyService
  ) {}

  ngOnInit() {}

  setView(mode) {
    this.viewMode = mode;
  }

  formCompleteHandle(formVal) {
    this.fbService.addNewEvent(formVal).subscribe(data => {
      this.notifyService.isVisible.next({
        type: "success",
        message: "New event added successfully!",
        visibility: true
      });
      this.router.navigate(["/"]);
    });
  }
}
