import React from 'react';
import ReactDOM from 'react-dom';
import store from './_Store';


  /* C o u n t D o w n: timerbox and boards kid */
var CountDown = React.createClass({


  getInitialState: function () {
    return { secondsElapsed: 10,
        ticking: false,
        paused: true };
  },
  componentDidMount: function () {
        // (???) called right after render. setInterval takes calls this.tick every 10000ms...
  },
  componentWillUnmount: function () {
        // (???) called at the end, right before the component is destroyed/deleted...
    this.countDownStop();
  },
  tick: function () {
        // every time this is called, counter goes down by 1
    this.setState({ secondsElapsed: this.state.secondsElapsed - 1 });
  },
  countDownStart: function () {
    clearInterval(this.interval);
    this.interval = setInterval(this.tick, 1000);
    this.setState({ ticking: true });
  },
  countDownStop: function () {
    clearInterval(this.interval);
    this.setState({ ticking: false });

  },
  reset: function () {
    this.countDownStop();
    var stateObj = this.getInitialState();
    var newNum = stateObj.secondsElapsed;
    this.setState({
        secondsElapsed: newNum
      });
  },
  handleNumInput: function (e) {
    console.log(e.target.value);
    this.setState({
        secondsElapsed: e.target.value
      });
  },
  pausePlay: function () {

    if (!this.state.ticking) {
        this.countDownStart();
        this.setState({ paused: false });
      } else {
        this.setState({ paused: true });
        this.countDownStop();
      }
  },
  handleTimerUp: function () {

    this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      });
  },
  handleTimerDown: function () {
    console.log('decrement');

    this.setState({
        secondsElapsed: this.state.secondsElapsed - 1
      });
  },

  render: function () {

    var timerText;
    if (this.state.secondsElapsed > 0) {
        timerText = this.state.secondsElapsed;
      } else {
        timerText = 'done.';
        clearInterval(this.interval);
      }
    return (
          <div>
            <div className="countDownSettingsContainer">
              <input
                type="number"
                placeholder="new time"
                onChange={this.handleNumInput} />
              <button
                label="stuff"
                type="button"
                onClick={this.edit}>OK</button>
              <div
                className="countDownBtnPausePlay btn"
                onClick={() => store.dispatch({ type: 'PAUSEPLAY' })}>[=>]</div>
              <div className="setTimerUpDnContainer btn">
                <div
                  className="setTimerUpComp"
                  onClick={() => store.dispatch({ type: 'INCREMENT' })}>[up]</div>
                <div
                  className="setTimerDnComp"
                  onClick={() => store.dispatch({ type: 'DECREMENT' })}>[dn]</div>
              </div>
              <div
                className="countDownBtnReset btn"
                onClick={this.reset}>[r]</div>

            </div>
            <div className="countDownTextContainer">
              <div className="countDownText">{timerText}</div>
            </div>
          </div>


        );
  }
});
module.exports = CountDown;
