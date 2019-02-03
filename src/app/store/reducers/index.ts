import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "src/environments/environment";

import * as fromHome from "./home.reducer";
import * as fromEvents from "./events.reducer";

export interface AppState {
  home: fromHome.HomeState;
  events: fromEvents.EventsState;
}

export const reducers: ActionReducerMap<AppState> = {
  home: fromHome.homeReducer,
  events: fromEvents.eventsReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
