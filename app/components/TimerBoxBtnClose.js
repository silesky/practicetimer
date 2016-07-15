import React, { PropTypes } from 'react';

const TimerBoxBtnClose = ({ onTimerBoxBtnCloseClick }) => {
  return (
  <div className="close-btn">
    <div
      className=""
      onClick={() => {
        console.log('close');
        onTimerBoxBtnCloseClick();
      } }>
      <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
         <i className="fa fa-minus-circle fa-1x"></i>
      </button>
    </div>
  </div>


  );
};

export default TimerBoxBtnClose;
