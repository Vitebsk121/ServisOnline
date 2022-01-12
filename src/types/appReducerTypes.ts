export interface IAppReducerState {
  menuIsOpen: boolean;
  backDropIsOpen: boolean;
}

export enum AppReducerActions {
  MENU_OPEN = 'MENU_OPEN',
  MENU_CLOSE = 'MENU_CLOSE',
  BACKDROP_OPEN = 'BACKDROP_OPEN',
  BACKDROP_CLOSE = 'BACKDROP_CLOSE',
}

export interface IAppReducerActionsTypes {
  type: AppReducerActions;
}
