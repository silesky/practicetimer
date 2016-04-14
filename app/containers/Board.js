import React from 'react';
import ReactDOM from 'react-dom';
import TimerBox from './TimerBox';
import CountDownTotal from '../components/CountDownTotal';
import BoardBtnIncrementDecrement from '../components/BoardBtnIncrementDecrement';
import store from '../_Store';
const Board = React.createClass({

  render: function() {

    const timerCount = store.getState().timerCount;
    const timeArray = store.getState().timeArray;
    //const idArray = store.getState().idArray;
    const titleArray = store.getState().titleArray;
  /*
  const timerBoxesArr = [];
 for (let i = 0; i < timerCount; i++) {
      timerBoxesArr.push(<TimerBox
        eachKey= { i }
        eachTime={ timeArray[i] }
        eachTitle={ titleArray[i] }
        />);
    } */

/* al this board does is increment the timer */
    return(
            <div className="board">
              <CountDownTotal />
              <BoardBtnIncrementDecrement
                onBoardBtnIncrementClick={() => store.dispatch({ type: 'INCREMENT_TIMERCOUNT' }) }
                onBoardBtnDecrementClick={() => store.dispatch({ type: 'DECREMENT_TIMERCOUNT' }) }
              />

            
                { timeArray.map((el, i) => {
                      return(<TimerBox
                    eachKey={ i }
                    eachTime={ timeArray[i] }
                    eachTitle={ titleArray[i] }
                    />);
                  }) }

          </div>
          );
  },
});

module.exports = Board;
      /* drum roll */
