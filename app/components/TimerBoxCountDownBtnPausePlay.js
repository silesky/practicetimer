import React, { PropTypes } from 'react';

const TimerBoxCountDownBtnPausePlay = ({  ifZero, onTimerBoxCountDownStart}) => {
  return (
    <div
      className="countDownBtnPausePlay btn"
      onClick={() => {
        ifZero();
        onTimerBoxCountDownStart();
      } }>
      [p]
    </div>

  );
};

export default TimerBoxCountDownBtnPausePlay;
