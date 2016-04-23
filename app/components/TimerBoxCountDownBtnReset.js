import React, { PropTypes } from 'react';

const TimerBoxCountDownBtnReset = ({  onTimerBoxCountDownBtnResetEvent }) => {
  return (
    <div
      className="countDownBtnReset btn"
      onClick={() => {
        console.log('onTimerBoxCountDownBtnResetEvent');
        onTimerBoxCountDownBtnResetEvent();
      } }>
      [r]
    </div>

  );
};

export default TimerBoxCountDownBtnReset;
