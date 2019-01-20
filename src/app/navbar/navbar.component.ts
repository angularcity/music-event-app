import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { AuthService } from "./../services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  isOpen = false;
  constructor(public auth: AuthService) {}

  ngOnInit() {}

  logout() {
    // this.auth.logout();
  }
  toggle() {
    // this.isOpen = !this.isOpen;
  }
}
