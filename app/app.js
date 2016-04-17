/*
<Board>
  <CountDownTotal />

  <TimerBox>
     <Title />
    <CountDown />
  </TimerBox>

</Board>
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Board from './containers/Board';
import store from './_Store';
import { Provider } from 'react-redux';

const mapStateToProps = function(state) {
   return {
     time: state.timerBoxReducer
   }
 };
  const renderRoot = () => {
    console.log(store.getState());
    ReactDOM.render(
      <Provider store={store}>
        <Board />
      </Provider>,
      document.getElementById('timer')
        );
};
store.subscribe(renderRoot);
renderRoot(); // initial render method (chapter 19)
