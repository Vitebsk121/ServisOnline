import "./App.scss";

import React from "react";
import Navigation from "../../Components/Navigation/Navigation";
import Header from "../../Components/Header/Header";
import OrderPage from "../Pages/OrderPage/OrderPage";
import {useDispatch} from "react-redux";
import useTypedSelector from "../../hooks/useTypedSelector";
import {closeMenu} from "../../store/actions/appActions";
import Backdrop from "../../Components/UI/Backdrop/Backdrop";

type AppProps = {};

const App: React.FC<AppProps> = (props: AppProps) => {

  const dispatch = useDispatch();
  const { menuIsOpen } = useTypedSelector((state) => state.appState);

  const menuHandler = () => {
    menuIsOpen ? dispatch(closeMenu()) : null;
  };

  return (
    <div className="app__wrapper mainTheme">
      <Navigation />
      <Backdrop />
      <div role='none' className="page__content__wrapper" onClick={menuHandler}>
        <Header pageTitle={'Заказы'} storeTitle={['v8 Витебск']} />
        <OrderPage/>
      </div>
    </div>
  );
};

export default App;
