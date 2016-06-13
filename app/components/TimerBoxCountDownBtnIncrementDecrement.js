
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
        <i className="fa fa-toggle-up fa-2x"></i>
      </div>

      <div
        className="setTimerDnComp"
        onClick={() => {
          onTimerBoxCountDownBtnDecrementClick();

        }
      }
      >
        <i className="fa fa-toggle-down fa-2x"></i>
    </div>


  </div>


);
};

export default TimerBoxCountDownBtnIncrementDecrement;
