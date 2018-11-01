import type { Action } from "../Actions/types";
import * as Immutable from 'immutable';

export type State = {
  [key: string]: Immutable.Map
};

export function habits(state: State = Immutable.Map(), action: Action): State {
  switch (action.type) {
    case 'CHANGE_ADD_ACTION_INPUT':
      return state.merge({
        addActionInputValue: action.text
      });
    case 'ADD_ACTION':
      const actions = state.get('actions', []);

      return state.merge({
        addActionInputValue: '',
        actions: actions.concat({
          id: actions.length,
          text: action.text
        })
      });
    default:
      return state
  }
}