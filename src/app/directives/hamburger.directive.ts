import {
  Directive,
  HostBinding,
  HostListener,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import { Subject } from "rxjs";

@Directive({
  selector: "[appHamburger]",
  exportAs: "hamburger"
})
export class HamburgerDirective {
  @HostBinding("class.open") navOpen = false;
  constructor() {}
  @HostListener("click") mouseover(eventData: Event) {
    this.navOpen = !this.navOpen;
  }
  toggle() {
    this.navOpen = !this.navOpen;
  }
}
