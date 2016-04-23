import React, { PropTypes } from 'react';

const TimerBoxBtnClose = ({ onTimerBoxBtnCloseEvent }) => {
  return (
    <div
      className="btn btnComp btnCloseTimerComp"
      onClick={() => {
        console.log('close');
        onTimerBoxBtnCloseEvent();
      } }>
      [-]
    </div>


  );
};

export default TimerBoxBtnClose;
