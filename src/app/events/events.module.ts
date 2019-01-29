import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Custom
import { EventRoutingModule } from "./events.routing.module";
import { SharedModule } from "../shared/shared.module";
import { FilterPipeModule } from "ngx-filter-pipe";
import { AgmCoreModule } from "@agm/core";

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
    })
  ],
  exports: [EventRoutingModule.components],
  providers: []
})
export class EventsModule {}
