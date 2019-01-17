import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AngularFireModule } from "@angular/fire";
import { HomeComponent } from "./home/home.component";
import { EventComponent } from "./event/event.component";
import { EventsComponent } from "./events/events.component";
import { LoginComponent } from "./login/login.component";
import { environment } from "src/environments/environment";
import { AuthGuardService } from "./services/auth-guard.service";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "events/:id", component: EventComponent },
  { path: "events", component: EventsComponent },
  { path: "login", component: LoginComponent },
  {
    path: "manage",
    loadChildren: "./dashboard/dashboard.module#DashboardModule"
    //canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
