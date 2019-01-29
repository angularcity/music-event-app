import { Component, OnInit, ViewChild } from "@angular/core";
import { FirebaseService } from "./../../services/firebase.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit-event",
  templateUrl: "./edit-event.component.html",
  styleUrls: ["./edit-event.component.scss"]
})
export class EditEventComponent implements OnInit {
  events;
  eventId = null;

  constructor(private fbService: FirebaseService, private router: Router) {}

  ngOnInit() {
    this.fbService.getEventDetails().subscribe(data => {
      this.events = data;
      //console.log(this.events);
    });
  }
  editEvent(event) {
    this.eventId = event.id;
  }
  updateFormSubmit(saveData) {
    this.fbService
      .updateEventDetails(saveData.form.value, saveData.id)
      .subscribe(response => {
        this.router.navigate(["/"]);
      });
  }
}
