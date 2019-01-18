import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FilterPipeModule } from "ngx-filter-pipe";
import { HttpClientModule } from "@angular/common/http";

import { AgmCoreModule } from "@agm/core";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { JumbotronComponent } from "./jumbotron/jumbotron.component";
import { EventGalleryComponent } from "./event-gallery/event-gallery.component";
import { GalleryItemComponent } from "./event-gallery/gallery-item.component";
import { HomeComponent } from "./home/home.component";

import { EventComponent } from "./event/event.component";
import { EventsComponent } from "./events/events.component";
import { FooterComponent } from "./footer/footer.component";
import { EventsListComponent } from "./events/events-list/events-list.component";
import { EventsSearchComponent } from "./events/events-search/events-search.component";
import { EventsListItemComponent } from "./events/events-list/events-list-item.component";
import { EventsListService } from "./services/events-list.service";
import { EventMapComponent } from "./event/event-map/event-map.component";
import { LoginComponent } from "./login/login.component";

import { AuthService } from "./services/auth.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { HighlightDirective } from "./directives/highlight.directive";
// import { FirebaseService } from "./services/firebase.service";

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
    EventsListComponent,
    EventsSearchComponent,
    EventsListItemComponent,
    EventMapComponent,
    LoginComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FilterPipeModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "KEY_FOR_GOOGLE_MAP"
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [EventsListService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
