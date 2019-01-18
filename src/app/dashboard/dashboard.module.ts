import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { AddEventComponent } from "./add-event/add-event.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditEventComponent } from "./edit-event/edit-event.component";
import { EventDashboardComponent } from "./event-dashboard/event-dashboard.component";
@NgModule({
  declarations: [
    EventDashboardComponent,
    AddEventComponent,
    EditEventComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule {}
