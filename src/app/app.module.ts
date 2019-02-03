import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { EffectsModule } from "@ngrx/effects";
// Custom
import { AppComponent } from "./app.component";
import { EventResolverService } from "./services/event.resolver";
import { NotifyService } from "./shared/notify/notify.service";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { EventsEffects } from "./store/effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([EventsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [EventResolverService, NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
