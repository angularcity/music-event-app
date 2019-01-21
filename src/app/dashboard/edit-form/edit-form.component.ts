import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-edit-form",
  templateUrl: "./edit-form.component.html",
  styleUrls: ["./edit-form.component.scss"]
})
export class EditFormComponent implements OnInit {
  @ViewChild("f") form: NgForm;
  @Input() event;
  constructor() {}

  ngOnInit() {
    console.log("kitti", this.event);

    setTimeout(() => {
      this.form.setValue({
        name: this.event.name,
        date: this.event.date,
        imageUrl: this.event.imageUrl,
        location: {
          name: this.event.location.name,
          lat: this.event.location.lat,
          lng: this.event.location.lng
        },
        ticketsAvailable: this.event.ticketsAvailable,
        description: this.event.description
      });
    }, 100);
  }
}
