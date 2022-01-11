export interface IAppReducerState {
  menuIsOpen: boolean;
}

export enum AppReducerActions {
  MENU_OPEN = 'MENU_OPEN',
  MENU_CLOSE = 'MENU_CLOSE',
}

export interface IAppReducerActionsTypes {
  type: AppReducerActions;
}
