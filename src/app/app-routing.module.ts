import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";

import { LoginComponent } from "./login/login.component";

import { BookingsComponent } from "./bookings/bookings.component";

import { EventsComponent } from "./events/event-details/events.component";
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "events", component: EventsComponent },
  { path: "login", component: LoginComponent },
  { path: "bookings", component: BookingsComponent },
  {
    path: "manage",
    loadChildren: "./dashboard/dashboard.module#DashboardModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
