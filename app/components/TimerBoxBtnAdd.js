import React, { PropTypes } from 'react';

const TimerBoxBtnAdd = ({  onTimerBoxBtnAddEvent }) => {
  return (
    <div
      className="btn btnComp btnAddTimerComp"
      onClick={() => {
        console.log('onTimerBoxBtnAddEvent');
        onTimerBoxBtnAddEvent();
      } }>
      [+]
    </div>

  );
};

export default TimerBoxBtnAdd;
