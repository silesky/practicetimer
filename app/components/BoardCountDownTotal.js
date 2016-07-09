import React from 'react';

const BoardCountDownTotal = ({total}) => {
    return (
      <div className="BoardCountDownTotal-Container">
        <div className="BoardCountDownTotal-text">
         {total}
        </div>
      </div>
    );
};

export default BoardCountDownTotal;
