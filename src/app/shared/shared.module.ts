import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

// Common and shared.

import { NavbarComponent } from "./navbar/navbar.component";
import { JumbotronComponent } from "../home/jumbotron/jumbotron.component";
import { EventGalleryComponent } from "../events/event-gallery/event-gallery.component";
import { GalleryItemComponent } from "../events/event-gallery/gallery-item.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "../home/home.component";

// Directives

import { HighlightDirective } from "../directives/highlight.directive";
import { HamburgerDirective } from "../directives/hamburger.directive";
import { ToggleDirective } from "../directives/toggle.directive";
import { ToggleOverlayDirective } from "../directives/toggle-overlay.directive";

@NgModule({
  declarations: [
    NavbarComponent,
    JumbotronComponent,
    EventGalleryComponent,
    GalleryItemComponent,
    FooterComponent,
    HomeComponent,
    HighlightDirective,
    HamburgerDirective,
    ToggleDirective,
    ToggleOverlayDirective
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    NavbarComponent,
    JumbotronComponent,
    GalleryItemComponent,
    FooterComponent,
    HomeComponent
  ]
})
export class SharedModule {}
