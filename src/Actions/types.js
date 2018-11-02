export type Action =
  | {type: 'CHANGE_ADD_ACTION_INPUT', text: string}
  | {type: 'CHANGE_AMOUNT_DAY_INPUT', amount: number}
  | {type: 'REMOVE_ACTION', id: string}
  | {type: 'ADD_ACTION', text: string};

export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
