import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import draggable from 'jquery-ui';
import TimerBoxTitle from '../components/TimerBoxTitle';
import TimerBoxCountDown from './TimerBoxCountDown';
import TimerBoxBtnAdd from '../components/TimerBoxBtnAdd';
import TimerBoxBtnClose from '../components/TimerBoxBtnClose';
import store from '../_Store';
const TimerBox = React.createClass({

  componentDidMount: function() {
    $(ReactDOM.findDOMNode(this)).draggable();
  },

  /* onTimerBoxBtnCloseEvent ---
  so this parent component is the ui logic...
  * but it's not the eventhandler itself...
  *  onTimerBoxBtnCloseEvent !== onClick
  *  ... onTimerBoxBtnCloseEvent is passed to  TimerBoxBtnClose as a prop
  **/

  render: function() {
    return (
      <div className="timerBox">
        <div className="topBarContainer">
          <div className="topBarLeft">
            <TimerBoxBtnClose
              onTimerBoxBtnCloseEvent={ () =>
                store.dispatch({
                  type: 'REMOVE_TIMER',
                  id: this.props.eachKey
                })
              }
              />

          </div>
          <div className="topBarRight">
            <TimerBoxBtnAdd
              onTimerBoxBtnAddEvent={ () =>
                store.dispatch({
                  type: 'ADD_TIMER',
                  id: this.props.eachKey
                })
              }
              />
          </div>
          <div className="titleContainer">

              <TimerBoxTitle
                onTimerBoxTitleEvent={ (titleSetInput) => {
                  store.dispatch({
                              type: 'SET_TITLE',
                              text: titleSetInput.value,
                              id: this.props.eachKey
                          });
                 }
                }
                eachKey={ this.props.eachKey }
                eachTitle={ this.props.eachTitle }
                />
          </div>

          <TimerBoxCountDown eachTime={this.props.eachTime}  />




        </div>
      </div>

    );
  }
});

module.exports = TimerBox;
