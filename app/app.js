

//webpack --progress --colors --watch

import React from 'react';
import ReactDOM from 'react-dom';
import Board from './containers/Board';
import store from './_Store';
import { Provider } from 'react-redux';


  const renderRoot = () => {
    ReactDOM.render(
      <Provider store={store}>
          <Board />
      </Provider>,
      document.getElementById('timer')
        );
};
store.subscribe(renderRoot);
renderRoot(); // initial render method (chapter 19)
