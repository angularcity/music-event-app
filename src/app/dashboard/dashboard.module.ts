import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventDashboardComponent } from "../event-dashboard/event-dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
@NgModule({
  declarations: [EventDashboardComponent],
  imports: [CommonModule, DashboardRoutingModule]
})
export class DashboardModule {}
