import React from 'react';
import ReactDOM from 'react-dom';
import {  bindActionCreators } from 'redux';
import { connect  } from 'react-redux';

import * as actionCreators from '../actions/_actionCreators';
import TimerBoxTitle from '../components/TimerBoxTitle';
import TimerBoxCountDown from './TimerBoxCountDown';
import TimerBoxBtnClose from '../components/TimerBoxBtnClose';
import TimerBoxBtnReset from '../components/TimerBoxBtnReset';

export const TimerBox = React.createClass({
  componentWillUnmount: function() {
    console.log('component unmounted...');
    ReactDOM.findDOMNode(this.refs.timerBox).className = 'remove';
  },
  render() {
    return (

      <div ref="timerBox" className={ `timerBox ${(this.props.eachTicking) ? 'ticking' : ''}` } >
            <TimerBoxBtnClose
              onTimerBoxBtnCloseClick={ () => this.props.actions.removeTimer(this.props.eachKey) }
              />
              <TimerBoxBtnReset
                onTimerBoxBtnResetClick={ () => this.props.actions.reset(this.props.eachKey) }
                />
            <TimerBoxTitle
              onTimerBoxTitleSet={ (titleSetInput) => {
                let text = titleSetInput.value;
                this.props.actions.setTitle(text, this.props.eachKey);
                }
              }
              eachKey={ this.props.eachKey }
              eachTitle={ this.props.eachTitle }
            />

          <TimerBoxCountDown
            eachKey={ this.props.eachKey }
            eachTime={ this.props.eachTime }
            eachTicking = { this.props.eachTicking }
            />

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
