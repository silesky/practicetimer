import React, { PropTypes } from 'react';

const TimerBoxCountDownBtnPausePlay = ({  onTimerBoxCountDownBtnPausePlayClick, onTimerBoxCountDownZero }) => {

  return (
    <div
      className="countDownBtnPausePlay btn"
      onClick={() => {
        onTimerBoxCountDownBtnPausePlayClick();
        onTimerBoxCountDownZero();
      } }>
      [p]
    </div>

  );
};

export default TimerBoxCountDownBtnPausePlay;
