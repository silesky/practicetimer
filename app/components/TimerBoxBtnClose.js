import React, { PropTypes } from 'react'

const TimerBoxBtnClose = ({ onTimerBoxBtnCloseClick }) => {
  return (
    <div
      className="btn btnComp btnCloseTimerComp"
      onClick={() => {
        console.log('close');
      } }>
      [-]
    </div>


  )
}

export default TimerBoxBtnClose;
