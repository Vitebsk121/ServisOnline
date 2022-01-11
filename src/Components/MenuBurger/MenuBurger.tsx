import './MenuBurger.scss';

import React from 'react';
import { useDispatch } from 'react-redux';

import useTypedSelector from "../../hooks/useTypedSelector";
import { closeMenu, openMenu } from '../../store/actions/appActions';

type MenuBurgerProps = {};

const MenuBurger: React.FC<MenuBurgerProps> = () => {
  const dispatch = useDispatch();
  const { menuIsOpen } = useTypedSelector((state) => state.appState);

  const menuHandler = () => {
    dispatch(menuIsOpen ? closeMenu() : openMenu());
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ' ? menuHandler() : null)}
      className={menuIsOpen ? 'menuBurger open' : 'menuBurger'}
      onClick={menuHandler}
    >
      <div className="burger__line first" />
      <div className="burger__line second" />
      <div className="burger__line third" />
    </div>
  );
};

export default MenuBurger;
