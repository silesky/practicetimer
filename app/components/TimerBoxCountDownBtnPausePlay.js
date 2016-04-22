import React, { PropTypes } from 'react'

const TimerBoxCountDownBtnPausePlay = ({  onTimerBoxCountDownBtnPausePlayClick }) => {
  return (
    <div
    className="countDownBtnPausePlay btn"
    onClick={() => {
    console.log('onTimerBoxCountDownBtnPausePlayClick');
        onTimerBoxCountDownBtnPausePlayClick();
    } }>
      [=>]
    </div>

  )
}

export default TimerBoxCountDownBtnPausePlay;
