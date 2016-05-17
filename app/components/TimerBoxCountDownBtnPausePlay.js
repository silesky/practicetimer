import React, { PropTypes } from 'react';

const TimerBoxCountDownBtnPausePlay = ({  onTimerBoxCountDownBtnPausePlayClick, onTimerBoxCountDownZero }) => {

  return (
    <div
      className="btn"
      onClick={() => {
        onTimerBoxCountDownBtnPausePlayClick();
        onTimerBoxCountDownZero();
      } }>
      [p]
    </div>

  );
};

export default TimerBoxCountDownBtnPausePlay;
