import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2
} from "@angular/core";

import { Observable } from "rxjs";
import { AuthService } from "./../services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, AfterViewInit {
  //@ViewChild("hamburger") hamburger: ElementRef;
  isOpen = false;
  constructor(public auth: AuthService, private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit(): void {}

  logout() {
    // this.auth.logout();
  }
  toggle() {
    // this.isOpen = !this.isOpen;
  }
  // toggleOverlay() {
  //   const isOpen = this.hamburger.nativeElement.classList.contains("open");
  //   if (isOpen) {
  //     this.renderer.removeClass(this.hamburger.nativeElement, "open");
  //   }
  // }
}
