import React, { PropTypes } from 'react';

const TimerBoxBtnClose = ({ onTimerBoxBtnCloseClick }) => {
  return (
    <div
      className="btn btnComp"
      onClick={() => {
        console.log('close');
        onTimerBoxBtnCloseClick();
      } }>
      [-]
    </div>


  );
};

export default TimerBoxBtnClose;
