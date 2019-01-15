import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { JumbotronComponent } from "./jumbotron/jumbotron.component";
import { EventGalleryComponent } from "./event-gallery/event-gallery.component";
import { GalleryItemComponent } from "./event-gallery/gallery-item.component";
import { HomeComponent } from "./home/home.component";

import { EventComponent } from "./event/event.component";
import { EventsComponent } from "./events/events.component";
import { FooterComponent } from './footer/footer.component';
import { EventsListComponent } from './events/events-list/events-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    EventGalleryComponent,
    GalleryItemComponent,
    HomeComponent,
    EventComponent,
    EventsComponent,
    FooterComponent,
    EventsListComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
