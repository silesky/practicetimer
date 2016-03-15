
/* TODO
. add an edit button (when you click the number, it should change to a form)
. find a way to pause the timer... create a "ticking 'state'"

/*
webpack --progress --colors --watch
*/
import React from 'react';
import ReactDOM from 'react-dom';
// var CountDownTotal = require('./CountDownTotal');
import CountDownTotal from './CountDownTotal';
import $ from 'jquery';
import draggable from 'jquery-ui';


// todo-- change from refs to props
// created a Title component, and added an input box. right now it just inherits the props... input box should use an onchange e ent
// make up down work

/** * CountDown ***/

var Title = React.createClass({
  getInitialState: function () {
    return {
      titletext: 'default state',
      style: { background: 'white' }
    };
  },

  handleTitleInput: function (e) {
    console.log('handleTitleInput: ' + e.target.value);
    this.setState({
      titletext: e.target.value,
      style: { background: 'white' }
    });
  },

  handleTitleBlur: function () {
    this.setState({
      style: { background: 'red',
        color: 'white' }
    });

  },

  render: function () {
    return (
        <div>
          <input
            style={this.state.style}
            type="text"
            onBlur={this.handleTitleBlur}
            onChange={this.handleTitleInput} />
          <div>
            {this.state.titletext}
          </div>
        </div>
      );
  }

});
  /* C o u n t D o w n: timerbox and board's kid */
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
        console.log('pause-play');
        this.countDownStart();
        this.setState({ paused: false });
      } else {
        this.setState({ paused: true });
        this.countDownStop();
      }
  },
  incrementTime: function () {
    this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      });

  },
  decrementTime: function () {
    this.setState({
        secondsElapsed: this.state.secondsElapsed - 1
      });
  },
  handleRefTotalTime: function () {
    return 'CountDown.handleRefTotalTime called...';
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
                onClick={this.pausePlay}>[=>]</div>
              <div className="setTimerUpDnContainer btn">
                <div
                  className="setTimerUpComp"
                  onClick={this.incrementTime}>[up]</div>
                <div
                  className="setTimerDnComp"
                  onClick={this.decrementTime}>[dn]</div>
              </div>
              <div
                className="countDownBtnReset btn"
                onClick={this.reset}>[r]</div>

            </div>
            <div className="countDownText">
              {timerText}
            </div>
          </div>


        );
  }
});



    /* T i m e r B o x: board's kid */
var TimerBox = React.createClass({

  componentDidMount: function() {
    $(this.getDOMNode()).draggable();
    try {
          console.log('TimerBox.componentDidMount calling reference...');
          this.refs.countDownRef.handleRefTotalTime(); // works
        } catch (err) {
          console.log('Error from TimerBox.componentDidMount(): reference not called');
        }
  },
  remove: function (i) {
    console.log('removing');
    console.log(this.props.boxcount + ' boxes left.');
    console.log('you removed index ' + this.props.index);
    this.props.onRemove(this.props.index);
         /* so this.remove calls onRemove() is just a roundabout
         way of calling literally this.onRemoveHandler (which decrements the state by one */
  },
  render: function () {
    return (
            <div className="timerBox" onRemove={this.remove}>

              <div className="topBarContainer">
                <div className="topBarLeft">
                  <div
                    onClick={this.remove}
                    className="btn btnComp btnCloseTimerComp">[-]</div>
                </div>
                <div className="topBarRight">
                </div>

              </div>
              <div className="titleContainer">
                <div className="titleComp">
                  <Title />
                </div>
              </div>

              <CountDown ref="countDownRef" />




            </div>

          );
  }
});

      /** B o a r d * */

var Board = React.createClass({
  componentDidMount: function () {

    console.log('Board.componentDidMount calling reference...');
    try {
            /* it's weird, but the interface for the previous component (TimerBox)
             is named (refTimerBox) below,
            i.e. <TimerBox ref=...
             so we can both name the interface and call methods on it without really
            even looking at it!
            this.refs.myRef.handleRefTotalTime(); //fail */
            this.refs.refTimerBox.componentDidMount();
          }
          catch (err) {
            console.log('Board.componentDidMount: ERROR, reference not called');
            console.log(err);
          }

  },
  getInitialState: function () {
    return {
            boxcount: 1
          };
  },
  add: function () {
    var n = this.state.boxcount + 1;
    this.setState({ boxcount: n });
  },
  onRemoveHandler: function (index) {
    console.log('parent: removing...');
    var n = this.state.boxcount - 1;
    this.setState({ boxcount: n });
  },
        /* parent gives props as attributes */
  render: function() {
    var timerBoxesArr = [];
    for (var i = 0; i < this.state.boxcount; i++) {
      timerBoxesArr.push(
              <TimerBox
                ref="refTimerBox"
                boxcount={this.state.boxcount}
                index={i}
                onRemove={this.onRemoveHandler} />
            );
          }
    return (
            <div className="board" >
              <CountDownTotal />
              {timerBoxesArr}
              <div
                onClick={this.add}
                className="btn btnComp btnAddTimerComp">
                [+]
              </div>
            </div>
          );
  },
});
      /* drum roll */
ReactDOM.render(
        <Board />,
        document.getElementById('timer')
      );

      // start static server
