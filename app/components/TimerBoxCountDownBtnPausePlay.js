import React, { PropTypes } from 'react';

const TimerBoxCountDownBtnPausePlay = ({  onTimerBoxCountDownBtnPausePlayClick }) => {
  return (
    <div
      className="countDownBtnPausePlay btn"
      onClick={() => {
        console.log('onTimerBoxCountDownBtnPausePlayClick');
        onTimerBoxCountDownBtnPausePlayClick();
      } }>
      [p]
    </div>

  );
};

export default TimerBoxCountDownBtnPausePlay;
