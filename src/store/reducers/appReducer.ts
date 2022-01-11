import { AppReducerActions, IAppReducerActionsTypes, IAppReducerState } from '../../types/appReducerTypes';

const initialState: IAppReducerState = {
  menuIsOpen: false,
};

const appReducer = (state = initialState, action: IAppReducerActionsTypes): IAppReducerState => {
  switch (action.type) {
    case AppReducerActions.MENU_OPEN:
      return { ...state, menuIsOpen: true };
    case AppReducerActions.MENU_CLOSE:
      return { ...state, menuIsOpen: false };
    default:
      return state;
  }
};

export default appReducer;
