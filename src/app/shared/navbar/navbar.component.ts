import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2
} from "@angular/core";

import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, AfterViewInit {
  isOpen = false;
  constructor(public auth: AuthService, private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit(): void {}

  logout() {}
  toggle() {}
}
