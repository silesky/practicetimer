import React from 'react';
import ReactDOM from 'react-dom';

console.log("COUNTDOWN TOTAL");
var CountDownTotal = React.createClass({
  componentDidMount: function(){
  //  var x = ReactDOM.findDOMNode(this.refs.myRef);
  //  console.log("X!"+x);
  //  console.log("yes!");

  },
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
