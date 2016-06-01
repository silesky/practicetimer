/*
<Board>
  <BoardCountDownTotal />

  <TimerBox>
     <Title />
    <TimerBoxCountDown />
  </TimerBox>

</Board>
*/
import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import Board from './containers/Board';
import store from './_Store';
import { Provider } from 'react-redux';
console.log('app loaded.');
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
