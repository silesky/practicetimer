import React from 'react';
import ReactDOM from 'react-dom';
import {  bindActionCreators } from 'redux';
import { connect  } from 'react-redux';

import * as actionCreators from '../actions/_actionCreators';
import TimerBoxTitle from '../components/TimerBoxTitle';
import TimerBoxCountDown from './TimerBoxCountDown';
import TimerBoxBtnClose from '../components/TimerBoxBtnClose';

export const TimerBox = React.createClass({
  componentWillUnmount: function() {
    console.log('component unmounted...');
    ReactDOM.findDOMNode(this.refs.timerBox).className = 'remove';
  },
  render() {
    return (

      <div ref="timerBox" className={ `shadow timerBox ${(this.props.eachTicking) ? 'ticking' : ''}` } >
        <div className="topBar">
                       <TimerBoxTitle
              onTimerBoxTitleSet={ (titleSetInput) => {
                let text = titleSetInput.value;
                this.props.actions.setTitle(text, this.props.eachKey);
                }
              }
              eachKey={ this.props.eachKey }
              eachTitle={ this.props.eachTitle }
            />
            <TimerBoxBtnClose
              onTimerBoxBtnCloseClick={ () => this.props.actions.removeTimer(this.props.eachKey) }
              />


        </div>
        <div className="appBody">
            
          <TimerBoxCountDown
            eachKey={ this.props.eachKey }
            eachTime={ this.props.eachTime }
            eachTicking = { this.props.eachTicking }
            />
         </div> 
      </div>


    );
  },
});
// grabs state property from the state object...
const mapStateToProps = (state) => ({ state });

// remove dispatch wrapper: store.dispatch({ this.props.action.removeTimer }) -> this.props.action.removeTimer...
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
};


export default connect(mapStateToProps, mapDispatchToProps)(TimerBox);
