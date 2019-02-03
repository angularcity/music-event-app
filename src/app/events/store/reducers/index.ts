import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";

import { environment } from "src/environments/environment";

export interface EventsState {}

export const reducers: ActionReducerMap<EventsState> = {};

export const metaReducers: MetaReducer<EventsState>[] = !environment.production
  ? []
  : [];
