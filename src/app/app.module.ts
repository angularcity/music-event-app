import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { BookingModule } from "./bookings/bookings.module";
import { SharedModule } from "./shared/shared.module";
import { EventsModule } from "./events/events.module";
import { EventResolverService } from "./services/event.resolver";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    BookingModule,
    SharedModule,
    EventsModule
  ],
  providers: [EventResolverService],
  bootstrap: [AppComponent]
})
export class AppModule {}
