/* jshint
esversion: 6  */
/* TODO
. add an edit button (when you click the number, it should change to a form)
. find a way to pause the timer... create a "ticking 'state'"
*/
/* webpack --progress --colors --watch */
import React from 'react';
import ReactDOM from 'react-dom';
console.log("app.js...");



/*** CountDown ***/
var CountDown = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 10,
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
    this.setState({secondsElapsed: this.state.secondsElapsed - 1});
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
  reset: function() {
    this.countDownStop();
    var stateObj = this.getInitialState();
    var newNum = stateObj.secondsElapsed;
    this.setState({
        secondsElapsed: newNum
      });
  },


  edit: function() {
    var v =  this.refs.editNum.getDOMNode().value;
    this.setState({
        secondsElapsed: v
      });
  },
  pausePlay: function() {
     if (!this.state.ticking) {
      console.log("pause-play");
      this.countDownStart();
      this.setState({ paused: false});
    } else {
      this.setState({ paused: true});
      this.countDownStop();
    }
  },
  incrementTime: function() {
    console.log("increment");

  },
  decrementTime: function() {
    console.log("decrement");
  },

  render: function() {

    var timerText;
    if (this.state.secondsElapsed > 0) {
      timerText = this.state.secondsElapsed;
    } else {
      timerText = "done.";
    }
    return (
      <div>
      <div className="countDownSettingsContainer">


        <input type="number" placeholder="new time" ref="editNum" />
        <button label="stuff" type="button" onClick={this.edit}>OK</button>
        <div className="countDownBtnPausePlay btn"
            onClick={this.pausePlay}>[=>]</div>

        <div className="setTimerUpDnContainer btn">
          <div className="setTimerUpComp"
            onClick={this.incrementTime}>[up]</div>
          <div className="setTimerDnComp"
            onClick={this.decrementTime}>[dn]</div>
        </div>
        <div className="countDownBtnReset btn"
          onClick={this.reset}>[r]</div>

      </div>
      <div className="countDownText">
        {timerText}
      </div>
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
            <div className="btn btnComp btnCloseTimerComp">[-]</div>
          </div>
          <div className="topBarRight">

          </div>

        </div>
        <div className="titleContainer">
            <div className="titleComp">Practicing Guitar</div>
        </div>

        <CountDown />




      </div>

    );
  }
});

/** Parent **/
var Board = React.createClass({
  getInitialState: function() {
    return {
      boxcount: 1
    };
  },
  add: function() {
    console.log('add...');
    var n = this.state.boxcount + 1;
    this.setState({boxcount: n});
  },

  render: function() {
    var timerBoxesArr = [];
      for (var i = 0; i < this.state.boxcount; i++) {
          timerBoxesArr.push(<TimerBox />);
      }


    return (
    <div className="board">
      {timerBoxesArr}
      <div onClick={this.add} className="btn btnComp btnAddTimerComp">[+]</div>
      </div>

  );
  }
});

/* drum roll */
ReactDOM.render(
  <Board />,
  document.body
);

//start static server
