import React from 'react';
import ReactDOM from 'react-dom';
import {  bindActionCreators } from 'redux';
import { connect  } from 'react-redux';

import * as actionCreators from '../actions/_actionCreators';
import TimerBoxTitle from '../components/TimerBoxTitle';
import TimerBoxCountDown from './TimerBoxCountDown';
import TimerBoxBtnClose from '../components/TimerBoxBtnClose';
import store from '../_Store';



export const TimerBox = React.createClass({
  render: function() {

    return (
      <div className="timerBox">
        <div className="topBarContainer">
          <div className="topBarLeft">
            <TimerBoxBtnClose
              onTimerBoxBtnCloseClick={ this.props.actions.removeTimer.bind(this, this.props.eachKey) }
              />

          </div>
          <div className="topBarRight">

          </div>
          <div className="titleContainer">

            <TimerBoxTitle
              onTimerBoxTitleSet={
                (titleSetInput) => {
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

          <TimerBoxCountDown

            eachKey={ this.props.eachKey }
            eachTime={ this.props.eachTime }
            eachTicking = { this.props.eachTicking }

            />

        </div>
      </div>

    );
  }
});
// grabs state property from the state object...
const mapStateToProps = (state) => ({ state });

// remove dispatch wrapper: store.dispatch({ this.props.action.removeTimer }) -> this.props.action.removeTimer...
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
};


export default connect(mapStateToProps, mapDispatchToProps)(TimerBox);
