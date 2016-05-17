import React, { PropTypes } from 'react';

const TimerBoxCountDownBtnReset = ({  onTimerBoxCountDownBtnResetClick }) => {
  return (
    <div
      className="btn"
      onClick={() => {
        console.log('onTimerBoxCountDownBtnResetClick');
        onTimerBoxCountDownBtnResetClick();
      } }>
      [r]
    </div>

  );
};

export default TimerBoxCountDownBtnReset;
