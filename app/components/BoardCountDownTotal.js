import React from 'react';
import ReactDOM from 'react-dom';

var BoardCountDownTotal = React.createClass({
  render: function() {
    return (
      <div className="BoardCountDownTotalContainer">
        <div className="BoardCountDownTotalNum">
          10 seconds left...
        </div>
      </div>
    );
  }

});

module.exports = BoardCountDownTotal;
