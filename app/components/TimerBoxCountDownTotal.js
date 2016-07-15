import React from 'react';

const TimerBoxCountDownTotal = ({ minutesHoursDisplayString }) => {
  return (
    <div className="TimerBoxCountDownTotal-Container">
    <span className="TimerBoxCountDownTotal-Text">{ minutesHoursDisplayString }</span>
    </div>
      );
   };

    export default TimerBoxCountDownTotal;
