import {AppReducerActions} from '../../types/appReducerTypes';

export const openMenu = () => ({
  type: AppReducerActions.MENU_OPEN,
});

export const closeMenu = () => ({
  type: AppReducerActions.MENU_CLOSE,
});
