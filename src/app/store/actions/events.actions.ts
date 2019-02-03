import { Action } from "@ngrx/store";

export enum EventsActionTypes {
  LoadAllEvents = "[Events On Initial Load] LoadAllEvents",
  LoadAllEventsSuccess = "[Events On Initial Load] LoadAllEventsSuccess",
  LoadAllEventsFailure = "[Events On Initial Load] LoadAllEventsFailure"
}

export class LoadAllEvents implements Action {
  readonly type = EventsActionTypes.LoadAllEvents;
}

export class LoadAllEventsSuccess implements Action {
  readonly type = EventsActionTypes.LoadAllEventsSuccess;
  constructor(public payload: Event[]) {}
}

export class LoadAllEventsFailure implements Action {
  readonly type = EventsActionTypes.LoadAllEventsFailure;
  constructor(public payload: any) {}
}

export type EventsActions =
  | LoadAllEvents
  | LoadAllEventsSuccess
  | LoadAllEventsFailure;
