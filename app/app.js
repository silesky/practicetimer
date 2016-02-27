/* jshint  */
/* http://localhost:9080/app */
import React from 'react';
import ReactDOM from 'react-dom';
console.log("app.js...");


var BtnAddTimer = React.createClass({
  render: function() {
    return(
      <div className="btnComp btnAddTimerComp">[+]</div>
    );

  }
});

var BtnCloseTimer = React.createClass({
  render: function() {
    return(
      <div className="btnComp btnCloseTimerComp">[-]</div>
    );

  }
});

var Title = React.createClass({
  render: function() {
    return(
      <div className="titleComp">Practicing Guitar</div>
    );

  }
});


var CountDown = React.createClass({

  getInitialState: function() {
    return {secondsElapsed: 300};
  },

  tick: function() {
    // every time this is called, counter goes down by 1
    this.setState({secondsElapsed: this.state.secondsElapsed - 1});
  },
  componentDidMount: function() {
    // (???) called right after render. setInterval takes calls this.tick every 10000ms...
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    // (???) called at the end, right before the component is destroyed/deleted...
    clearInterval(this.interval);
  },
  render: function() {
    return(
      <div className="countDownComp">{this.state.secondsElapsed}</div>
    );
  }
});


var SetTimerUpDn = React.createClass({
  render: function() {
    return(
      <div className="setTimerUpDnContainer">
        <div className="setTimerUpComp">[up]</div>
        <div className="setTimerDnComp">[dn]</div>
      </div>
    );
  }
});
var SetTimerPause = React.createClass({
  render: function() {
    return(
      <div id="pause" className="setTimerPauseContainer">
        <div className="setTimerPauseComp">[=>]</div>
      </div>
    );
  }
});

var TimerBox = React.createClass({
  render: function() {
    return(
      <div className="timerBox">

        <div className="topBarContainer">
          <div className="topBarLeft">
            <BtnCloseTimer />
          </div>
          <div className="topBarRight">
            <BtnAddTimer />
          </div>

        </div>
        <div className="titleContainer">
          <Title />
        </div>


        <div className="countDownContainer">
          <CountDown />
          <SetTimerUpDn />
          <SetTimerPause />
        </div>

      </div>

    );
  }
});




/* drum roll */
ReactDOM.render(
  <TimerBox />,
  document.getElementById('timer')
);
