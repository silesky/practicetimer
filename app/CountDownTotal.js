var React = require('react');
var PropTypes = React.PropTypes;
console.log("COUNTDOWN TOTAL");
var CountDownTotal = React.createClass({

  render: function() {
    return (
      <div className="countDownTotalContainer">
        <div className="countDownTotalNum">
          {this.props.totalTime} s
        </div>
      </div>
    );
  }

});

module.exports = CountDownTotal;
