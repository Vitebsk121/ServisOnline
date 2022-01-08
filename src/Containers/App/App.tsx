import "./App.scss";

import React from "react";
import Navigation from "../../Components/Navigation/Navigation";

type AppProps = {};

const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <div className="app__wrapper mainTheme">
      <Navigation />
      <div className="page__content"></div>
    </div>
  );
};

export default App;
