import {
  Directive,
  HostBinding,
  HostListener,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[appHamburger]"
})
export class HamburgerDirective {
  @HostBinding("class.open") navOpen = false;
  constructor() {}
  @HostListener("click") mouseover(eventData: Event) {
    this.navOpen = !this.navOpen;
  }
}
