import { Action } from "@ngrx/store";

export interface HomeState {
  title: string;
}

export const initialState: HomeState = {
  title: "Music App With ngrx"
};

export function homeReducer(state = initialState, action: Action): HomeState {
  switch (action.type) {
    default:
      return state;
  }
}
