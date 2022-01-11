import "./App.scss";

import React from "react";
import Navigation from "../../Components/Navigation/Navigation";
import Header from "../../Components/Header/Header";

type AppProps = {};

const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <div className="app__wrapper mainTheme">
      <Navigation />
      <div className="page__content__wrapper">
        <Header pageTitle={'Заказы'} storeTitle={['v8 Витебск']} />
        {/*<Page />*/}
      </div>
    </div>
  );
};

export default App;
