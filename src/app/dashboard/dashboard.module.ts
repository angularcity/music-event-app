import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventDashboardComponent } from "../event-dashboard/event-dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { AddEventComponent } from "./add-event/add-event.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [EventDashboardComponent, AddEventComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule {}
