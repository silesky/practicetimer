
import React, { PropTypes } from 'react';

const TimerBoxCountDownBtnIncrementDecrement =
({  onTimerBoxCountDownBtnIncrementClick,
  onTimerBoxCountDownBtnDecrementClick }) => {
    return (
      <div className="setTimerUpDnContainer btn">


        <div
          className="setTimerUpComp"
          onClick={ () => {
            onTimerBoxCountDownBtnIncrementClick();
          }
        }
        >
        [up]
      </div>

      <div
        className="setTimerDnComp"
        onClick={() => {
          onTimerBoxCountDownBtnDecrementClick();

        }
      }
      >
      [dn]
    </div>


  </div>


);
};

export default TimerBoxCountDownBtnIncrementDecrement;
