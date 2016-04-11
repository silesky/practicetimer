import React from 'react';
import ReactDOM from 'react-dom';
import TimerBox from '../components/TimerBox';
import CountDownTotal from '../components/CountDownTotal';
import store from '../_Store';
const Board = React.createClass({

  render: function() {

    const timerCount = store.getState().timerCount;
    const timeArray = store.getState().timeArray;
    const timerBoxesArr = [];
    for (let i = 0; i < timerCount; i++) {
      timerBoxesArr.push(
              <TimerBox
                specificTime={ timeArray[i] }
                key={ i } />
            );
          }
    return(
            <div className="board">
              <CountDownTotal />
              <div
              className="btn btnComp btnAddTimerComp"
                onClick={() => store.dispatch({ type: 'INCREMENT_TIMERCOUNT' })}>
                [+]
              </div>
              <div
              className="btn btnComp btnRemoveTimerComp"
                onClick={() => store.dispatch({ type: 'DECREMENT_TIMERCOUNT' })}>
                [-]
              </div>
              { timerBoxesArr }
            </div>
          );
  },
});

module.exports = Board;
      /* drum roll */
