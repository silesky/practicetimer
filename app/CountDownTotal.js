var React = require('react');

var CountDownTotal = React.createClass({

  getInitialState: function() {
    return {totalSeconds: 10,
                  ticking: false,
                  paused: true};
  },
  componentDidMount: function() {
    this.countDownStart();
    // (???) called right after render. setInterval takes calls this.tick every 10000ms...
  },
  componentWillUnmount: function() {
    // (???) called at the end, right before the component is destroyed/deleted...
    this.countDownStop();
  },
  tick: function() {
    // every time this is called, counter goes down by 1
    var currentCountDown = this.state.totalSeconds - 1;
    this.setState({totalSeconds: currentCountDown});
    return currentCountDown;
  },
  countDownStart: function() {
      clearInterval(this.interval);
      this.interval = setInterval(this.tick, 1000);
      this.setState({ticking: true});
  },
  countDownStop: function() {
        clearInterval(this.interval);
        this.setState({ticking: false});
  },
  handle: function(e) {
    console.log(e.target.value);
  },


// {this.props.totalTime} is what I set up, but I really need something else
  render: function() {

    var timerText;

 //123



    if (this.state.totalSeconds > 0) {
      timerText = this.state.totalSeconds + " s";
    } else {
      timerText = "done.";
    }
    return (
      <div className="countDownTotalContainer">
        <div className="countDownTotalNum">
          {timerText}
        </div>
      </div>


    );
  }
});
module.exports = CountDownTotal;
