import React, { PropTypes } from 'react';

const TimerBoxBtnAdd = ({  onTimerBoxBtnAddClick }) => {
  return (
    <div
      className="btn btnComp btnAddTimerComp"
      onClick={() => {
        console.log('onTimerBoxBtnAddClick');
        onTimerBoxBtnAddClick();
      } }>
      [+]
    </div>

  );
};

export default TimerBoxBtnAdd;
