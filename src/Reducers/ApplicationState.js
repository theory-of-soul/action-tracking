import * as Immutable from "immutable";

export type ApplicationState = {
  [key: 'habits']: Immutable.Map
};