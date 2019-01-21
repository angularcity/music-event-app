import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-edit-event-item",
  templateUrl: "./edit-event-item.component.html",
  styleUrls: ["./edit-event-item.component.scss"]
})
export class EditEventItemComponent implements OnInit {
  @Input() event;
  isEdit = false;
  constructor() {}

  ngOnInit() {}
  toggle() {
    this.isEdit = !this.isEdit;
  }
}
