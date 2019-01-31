import { Component, OnInit } from "@angular/core";
import { NotifyService } from "./shared/notify/notify.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Music Events App";
  isVisible$: Observable<any>;
  constructor(private notifyService: NotifyService) {}
  ngOnInit(): void {
    this.isVisible$ = this.notifyService.isVisible;
  }
}
