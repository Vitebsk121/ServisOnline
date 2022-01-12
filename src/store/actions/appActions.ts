import {AppReducerActions} from '../../types/appReducerTypes';

export const openMenu = () => ({
  type: AppReducerActions.MENU_OPEN,
});

export const closeMenu = () => ({
  type: AppReducerActions.MENU_CLOSE,
});

export const openBackdrop = () => ({
  type: AppReducerActions.BACKDROP_OPEN,
});

export const closeBackdrop = () => ({
  type: AppReducerActions.BACKDROP_CLOSE,
});
