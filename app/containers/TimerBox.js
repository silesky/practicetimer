import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import draggable from 'jquery-ui';
import Title from '../components/Title';
import CountDown from '../components/CountDown';
import TimerBoxBtnClose from '../components/TimerBoxBtnClose';
import store from '../_Store';
const TimerBox = React.createClass({

  componentDidMount: function() {
    $(ReactDOM.findDOMNode(this)).draggable();
  },

  /* onTimerBoxBtnCloseClick ---
  so this parent component is the ui logic...
   * but it's not the eventhandler itself...
   *  onTimerBoxBtnCloseClick !== onClick
   *  ... onTimerBoxBtnCloseClick is passed to  TimerBoxBtnClose as a prop
   **/

  render: function () {
    return (
      <div className="timerBox" onRemove={this.remove}>
        <div className="topBarContainer">
          <div className="topBarLeft">

            <TimerBoxBtnClose
                    onTimerBoxBtnCloseClick={ key =>
                      store.dispatch({
                        type: 'REMOVE_TIMER',
                      })
              }
      />
            </div>
        <div className="titleContainer">
          <div className="titleComp">
            <Title
              eachKey={ this.props.eachKey }
               eachTitle={ this.props.eachTitle }
               />
          </div>
        </div>

        <CountDown eachTime={this.props.eachTime}  />




      </div>
      </div>

    );
  }
});

module.exports = TimerBox;
