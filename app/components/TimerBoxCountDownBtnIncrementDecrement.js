
import React, { PropTypes } from 'react';

const TimerBoxCountDownBtnIncrementDecrement =
({  onTimerBoxCountDownBtnIncrementEvent,
  onTimerBoxCountDownBtnDecrementEvent }) => {
    return (
      <div className="setTimerUpDnContainer btn">


        <div
          className="setTimerUpComp"
          onClick={ () => {
            onTimerBoxCountDownBtnIncrementEvent();
          }
        }
        >
        [up]
      </div>

      <div
        className="setTimerDnComp"
        onClick={() => {
          onTimerBoxCountDownBtnDecrementEvent();
        }
      }
      >
      [dn]
    </div>


  </div>


);
};

export default TimerBoxCountDownBtnIncrementDecrement;
