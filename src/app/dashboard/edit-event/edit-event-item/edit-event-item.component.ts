import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit-event-item",
  templateUrl: "./edit-event-item.component.html",
  styleUrls: ["./edit-event-item.component.scss"]
})
export class EditEventItemComponent implements OnInit {
  @Input() event;
  @Output() formSubmit = new EventEmitter<any>();
  isEdit = false;
  constructor(private fbService: FirebaseService, private router: Router) {}

  ngOnInit() {}
  toggle() {
    this.isEdit = !this.isEdit;
  }
  remove(event) {
    this.fbService.deleteEvent(event.id).subscribe(success => {
      this.router.navigate(["/"]);
    });
  }
  onFormSubmit(event) {
    this.formSubmit.emit(event);
  }
}
