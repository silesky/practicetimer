/* jshint
esversion: 6  */
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
  handleClick: function() {
      console.log("click");
      this.countDownStart();
  },
  render: function() {

    return(
        <div onClick= {this.handleClick}
          id="pause" className="setTimerPauseContainer">
        <div className="setTimerPauseComp">[=>]</div>
      </div>
    );
  }
});

/*** CountDown ***/
var CountDown = React.createClass({

  countDownStart: function() {
        this.interval = setInterval(this.tick, 1000);
  },

  reset: function() {
      this.setState({
        secondsElapsed: 300
      });
  },

  getInitialState: function() {
    return {secondsElapsed: 300};
  },

  tick: function() {
    // every time this is called, counter goes down by 1
    this.setState({secondsElapsed: this.state.secondsElapsed - 1});
  },
  componentDidMount: function() {
    // (???) called right after render. setInterval takes calls this.tick every 10000ms...
    this.countDownStart();
  },
  componentWillUnmount: function() {
    // (???) called at the end, right before the component is destroyed/deleted...
    clearInterval(this.interval);
  },
  render: function() {
    return(
      <div className="countDownContainer">
        {this.state.secondsElapsed}
        <SetTimerUpDn />
          <div className="countDownBtnReset"
            onClick={this.reset}>[r]</div>
      </div>

    );
  }
});

/***/



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

        <CountDown />



      </div>

    );
  }
});




/* drum roll */
ReactDOM.render(
  <TimerBox />,
  document.getElementById('timer')
);
