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
          <div>

          <div className="TimerBoxCountDownSet">
            <div className="TimerBoxCountDownSet-container">
              <div className="hours">
                <input type="number" placeholder="0" min="0" max="24" 
                />
                h
              </div>
              <div className="minutes"> 
                <input type="number" placeholder="0" min="0" max="59" 
                 />
                 m
              </div>
              <div className="seconds">
                <input type="number" placeholder="0" min="0" max="59"
                ref={ node => {this.timeSetInput = node; }}
                />
                s
              </div>
              <button className="button-ok" label="stuff"
                onClick={ () => {
                  store.dispatch({
                    type: 'SET_TIME',
                    time: this.timeSetInput.value,
                    id: this.props.eachKey,
                  });
                } }>OK</button>
            </div>
              
        </div>

          <div className="TimerBoxCountDownTotal_container">
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
