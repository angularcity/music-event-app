import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventsListComponent } from "./event-details/events-list/events-list.component";
import { EventsSearchComponent } from "./event-details/events-search/events-search.component";
import { EventsListItemComponent } from "./event-details/events-list/events-list-item.component";
import { EventMapComponent } from "./event/event-map/event-map.component";
import { EventComponent } from "./event/event.component";
import { EventsComponent } from "./event-details/events.component";
import { EventResolverService } from "../services/event.resolver";

const routes: Routes = [
  {
    path: "events/:id",
    component: EventComponent,
    resolve: { events: EventResolverService }
  },
  { path: "events", component: EventsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule {
  static components = [
    EventsListComponent,
    EventsSearchComponent,
    EventsListItemComponent,
    EventMapComponent,
    EventComponent,
    EventsComponent
  ];
}
