import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
// Custom
import { EventRoutingModule } from "./events.routing.module";
import { SharedModule } from "../shared/shared.module";
import { FilterPipeModule } from "ngx-filter-pipe";
import { AgmCoreModule } from "@agm/core";
import { StoreModule } from "@ngrx/store";
import * as fromAppState from "./store";

@NgModule({
  declarations: [EventRoutingModule.components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EventRoutingModule,
    SharedModule,
    FilterPipeModule,
    AgmCoreModule.forRoot({
      apiKey: "KEY_FOR_GOOGLE_MAP"
    }),
    StoreModule.forFeature("events", fromAppState.reducers, {
      metaReducers: fromAppState.metaReducers
    })
  ],
  exports: [EventRoutingModule.components],
  providers: []
})
export class EventsModule {}
