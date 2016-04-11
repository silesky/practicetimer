import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import draggable from 'jquery-ui';
import Title from './Title';
import CountDown from './CountDown';
const TimerBox = React.createClass({

  componentDidMount: function() {
    $(ReactDOM.findDOMNode(this)).draggable();
  },
  render: function () {
    return (
      <div className="timerBox" onRemove={this.remove}>

        <div className="topBarContainer">
          <div className="topBarLeft">
            <div
              onClick={ console.log('remove') }
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

        <CountDown />




      </div>

    );
  }
});

module.exports = TimerBox;
