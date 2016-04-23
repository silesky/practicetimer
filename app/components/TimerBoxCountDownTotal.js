import React, { PropTypes } from 'react';

const TimerBoxCountDownTotal = ({ eachTime }) => {
  return (
    <div className="countDownTextContainer">
      <div className="countDownText">{ eachTime } </div>
    </div>
  );
};

export default TimerBoxCountDownTotal;
