import React, { PropTypes } from 'react';

const TimerBoxCountDownTotal = ({ eachTime }) => {
  return (
    <div className="TimerBoxCountDownTotal_container">
      <div className="TimerBoxCountDownTotal_text">{ eachTime } </div>
    </div>
  );
};

export default TimerBoxCountDownTotal;
