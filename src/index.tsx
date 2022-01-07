import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import logo from './favicon.png';

type IndexProps = {};

const App: React.FC<IndexProps> = (props: IndexProps) => {
  return (
    <img src={logo} alt={'logo'} />
  );
};

ReactDOM.render(<App/> ,document.getElementById('app'),
);
