import React, { PropTypes } from 'react';

const TimerBoxCountDownBtnReset = ({  onTimerBoxCountDownBtnResetClick }) => {
  return (
    <div
      className="countDownBtnReset btn"
      onClick={() => {
        console.log('onTimerBoxCountDownBtnResetClick');
        onTimerBoxCountDownBtnResetClick();
      } }>
      [r]
    </div>

  );
};

export default TimerBoxCountDownBtnReset;
