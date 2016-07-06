import React, { PropTypes } from 'react';

const TimerBoxBtnClose = ({ onTimerBoxBtnCloseClick }) => {
  return (
  <div className="">
    <div
      className=""
      onClick={() => {
        console.log('close');
        onTimerBoxBtnCloseClick();
      } }>
      <i className="fa fa-minus-circle fa-2x"></i>

    </div>
  </div>


  );
};

export default TimerBoxBtnClose;
