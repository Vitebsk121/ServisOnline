import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import compose from 'redux-typescript/lib/utils/compose';

import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
