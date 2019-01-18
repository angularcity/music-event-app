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
  @ViewChild("f") form: NgForm;
  constructor(private fbService: FirebaseService, private router: Router) {}

  ngOnInit() {
    this.fbService.getEventDetails().subscribe(data => {
      this.events = data;
      console.log(this.events);
    });
  }
  editEvent(event) {
    this.eventId = event.id;

    this.form.setValue({
      name: event.name,
      date: event.date,
      imageUrl: event.imageUrl,
      location: {
        name: event.location.name,
        lat: event.location.lat,
        lng: event.location.lng
      },
      ticketsAvailable: event.ticketsAvailable,
      description: event.description
    });
  }
  updateFormSubmit(event) {
    this.fbService
      .updateEventDetails(event.form.value, this.eventId)
      .subscribe(response => {
        this.form.reset();
        this.router.navigate(["/"]);
      });
  }
}
