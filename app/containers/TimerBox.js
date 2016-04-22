import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import draggable from 'jquery-ui';
import Title from '../components/Title';
import TimerBoxCountDown from './TimerBoxCountDown';
import TimerBoxBtnAdd from '../components/TimerBoxBtnAdd';
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
                    onTimerBoxBtnCloseClick={ () =>
                      store.dispatch({
                        type: 'REMOVE_TIMER',
                        id: this.props.eachKey
                      })
                    }
             />

          </div>
          <div className="topBarRight">
            <TimerBoxBtnAdd
                      onTimerBoxBtnAddClick={ () =>
                        store.dispatch({
                          type: 'ADD_TIMER',
                          id: this.props.eachKey
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

        <TimerBoxCountDown eachTime={this.props.eachTime}  />




      </div>
      </div>

    );
  }
});

module.exports = TimerBox;
