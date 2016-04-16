import React from 'react';
import ReactDOM from 'react-dom';
import TimerBox from './TimerBox';
import CountDownTotal from '../components/CountDownTotal';
import BoardBtnIncrementDecrement from '../components/BoardBtnIncrementDecrement';
import store from '../_Store';
const Board = React.createClass({
  render: function() {

  /* al this board does is increment the timer */
      return(
              <div className="board">
                <CountDownTotal />
                <BoardBtnIncrementDecrement
                  onBoardBtnIncrementClick={() => store.dispatch({ type: 'INCREMENT_TIMERCOUNT' }) }
                  onBoardBtnDecrementClick={() => store.dispatch({ type: 'DECREMENT_TIMERCOUNT' }) }
                />


              { store.getState().timerBoxReducer.map((el) => {
                        return(<TimerBox
                      eachKey={el.id}
                      eachTime={el.time}
                      eachTitle={el.title}
                      />);
                    }) }

            </div>
            );
    },
});

module.exports = Board;
      /* drum roll */
