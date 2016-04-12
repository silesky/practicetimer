import React from 'react';
import ReactDOM from 'react-dom';

var CountDownTotal = React.createClass({
  render: function() {
    return (
      <div className="countDownTotalContainer">
          <div className="countDownTotalNum">
            40
          </div>
      </div>
    );
  }

});

module.exports = CountDownTotal;
