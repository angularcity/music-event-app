import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "music-events-app";
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCsXcKc15exyOf5rypRA25UsiuSgJblvsM",
      authDomain: "event-booking-baf8d.firebaseapp.com"
    });
  }
}
