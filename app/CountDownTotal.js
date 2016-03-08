var React = require('react');

var CountDownTotal = React.createClass({

  getInitialState: function() {
    return {totalSeconds: 10,
                  ticking: false,
                  paused: true};
  },
  componentDidMount: function() {
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
    console.log(e);
  },


// {this.props.totalTime} is what I set up, but I really need something else
  render: function() {
    var inheritedTime = this.props.totalTime;
    console.log("inheritedTime:" + inheritedTime);
    var timerText;

    if (this.state.totalSeconds > 0) {
      timerText = this.state.totalSeconds + " s";

    } else {
     clearInterval(this.interval);
      timerText = "done.";

    }
    return (
      <div className="countDownTotalContainer" onClick={this.countDownStart} onChange={this.handle(inheritedTime)}>
        <div className="countDownTotalNum" >
          {timerText}
        </div>
      </div>


    );
  }
});
module.exports = CountDownTotal;
