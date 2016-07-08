// increment, decrement

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';

// import TimerBoxCountDownBtnPausePlay from '../components/TimerBoxCountDownBtnPausePlay';
import TimerBoxCountDownBtnIncrementDecrement from '../components/TimerBoxCountDownBtnIncrementDecrement';

import TimerBoxCountDownTotal from '../components/TimerBoxCountDownTotal';


import * as actionCreators from '../actions/_actionCreators';
import store from '../_Store';
import { secondsToMinutesAndHours } from '../util';


const TimerBoxCountDown = React.createClass({

  render() {
     
        return (
          <div className="timerBoxCountDown">
            <div className="timerBoxCountDownSet"/* className="TimerBoxCountDownSet-container */>
              <div /* className="hours" */>

                <input className="mdl-textfield__input" type="number" placeholder="0" min="0" max="24" 
                ref={ node => {this.inputHours = node; }}
                />
                h
              </div>
              <div /* className="minutes" */> 
                <input className="mdl-textfield__input" type="number"  placeholder="0" min="0" max="59" 
                ref={ node => {this.inputMinutes = node; }}
                 />
                 m
              </div>
              <div /* className="seconds" */ >
                <input className="mdl-textfield__input" type="number"  placeholder="0" min="0" max="59"
                ref={ node => {this.inputSeconds = node; }}
                />
                s
              </div>
              <button className="ok-button mdl-button mdl-js-button mdl-button--raised"
                onClick={ () => {  
                /* Math.round also casts the input to an integer */ 
                 let hours = Math.round(this.inputHours.value);
                 let mins = Math.round(this.inputMinutes.value);
                 let secs = Math.round(this.inputSeconds.value);
                 let secsFromHours = (hours ? hours : 0) * 3600;
                 let secsFromMins = (mins ? mins : 0) * 60;
                 let secsFromSecs = secs ? secs : 0;
                 let totalTimeInSeconds = secsFromHours + secsFromMins + secsFromSecs; 
                  store.dispatch({
                    type: 'SET_TIME',
                    time: totalTimeInSeconds,
                    id: this.props.eachKey,
                  });
                } }>Set</button>
 
          </div>
          <div className="TimerBoxCountDown-Container" >
            <TimerBoxCountDownTotal
                /* e.g 112 -> 1:42 */
              minutesHoursDisplayString={ secondsToMinutesAndHours(this.props.eachTime) }

              />
              <TimerBoxCountDownBtnIncrementDecrement
                onTimerBoxCountDownBtnIncrementClick={ () => this.props.actions.increment(this.props.eachKey) }
                onTimerBoxCountDownBtnDecrementClick={ () => this.props.actions.decrement(this.props.eachKey) }
                />
            </div>
        </div>
      );
    },
  });
  // grabs state property from the state object...
  const mapStateToProps = (state) => ({ state });

  const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actionCreators, dispatch)};
  };
  export default connect(mapStateToProps, mapDispatchToProps)(TimerBoxCountDown);
