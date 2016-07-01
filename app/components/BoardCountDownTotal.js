import React from 'react';

const BoardCountDownTotal = ({total}) => {
    return (
      <div className="BoardCountDownTotalContainer">
        <div className="BoardCountDownTotalNum">
         {total} minutes remaining...
        </div>
      </div>
    );
};

export default BoardCountDownTotal;
