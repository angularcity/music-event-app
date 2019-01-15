import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { EventComponent } from "./event/event.component";
import { EventsComponent } from "./events/events.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "events/:id", component: EventComponent },
  { path: "events", component: EventsComponent },
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
