import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { Router } from "@angular/router";
import { NotifyService } from "src/app/shared/notify/notify.service";

@Component({
  selector: "app-edit-event-item",
  templateUrl: "./edit-event-item.component.html",
  styleUrls: ["./edit-event-item.component.scss"]
})
export class EditEventItemComponent implements OnInit {
  @Input() event;
  @Output() formSubmit = new EventEmitter<any>();
  isEdit = false;
  constructor(
    private fbService: FirebaseService,
    private router: Router,
    private notifyService: NotifyService
  ) {}

  ngOnInit() {}
  toggle() {
    this.isEdit = !this.isEdit;
  }
  remove(event) {
    this.fbService.deleteEvent(event.id).subscribe(success => {
      this.notifyService.isVisible.next({
        type: "alert",
        message: "Event is deleted",
        visibility: true
      });
      this.router.navigate(["/"]);
    });
  }
  onFormSubmit(event) {
    this.formSubmit.emit(event);
  }
}
