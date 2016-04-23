import React, { PropTypes } from 'react';

const TimerBoxCountDownBtnPausePlay = ({  onTimerBoxCountDownBtnPausePlayEvent }) => {
  return (
    <div
      className="countDownBtnPausePlay btn"
      onClick={() => {
        console.log('onTimerBoxCountDownBtnPausePlayEvent');
        onTimerBoxCountDownBtnPausePlayEvent();
      } }>
      [p]
    </div>

  );
};

export default TimerBoxCountDownBtnPausePlay;
