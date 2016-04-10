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
  remove: function (i) {
    console.log('removing');
    console.log(this.props.boxcount + ' boxes left.');
    console.log('you removed key ' + this.props.key);
    this.props.onRemove(this.props.key);
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

        <CountDown />




      </div>

    );
  }
});

module.exports = TimerBox;
