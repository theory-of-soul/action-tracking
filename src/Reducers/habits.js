import * as Immutable from 'immutable';

export type State = Immutable.Map;

export default function habits(state: State = Immutable.Map(), action) {
  const habitActions = state.get('actions', []);

  switch (action.type) {
    case 'CHANGE_ADD_ACTION_INPUT':
      return state.merge({
        addActionInputValue: action.text,
      });
    case 'CHANGE_AMOUNT_DAY_INPUT':
      return state.merge({
        amountDay: action.amount,
      });
    case 'ADD_ACTION':
      return state.merge({
        addActionInputValue: '',
        actions: habitActions.concat({
          id: habitActions.length,
          text: action.text,
        }),
      });
    case 'REMOVE_ACTION':
      habitActions.splice(parseInt(action.id), 1);

      return state.merge({
        actions: [...habitActions],
      });
    default:
      return state;
  }
}
