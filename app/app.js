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
import Board from './containers/Board';
import store from './_Store';

  const renderRoot = () => {
    ReactDOM.render(
      <Board />,
      document.getElementById('timer')
        );
};
store.subscribe(renderRoot);
renderRoot(); // initial render method (chapter 19)
