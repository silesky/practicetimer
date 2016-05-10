import React from 'react';
import ReactDOM from 'react-dom';
import { dispatch,  bindActionCreators } from 'redux';
import { connect  } from 'react-redux';

import store from '../_Store';
import TimerBoxCountDownBtnPausePlay from '../components/TimerBoxCountDownBtnPausePlay';
import TimerBoxCountDownBtnIncrementDecrement from '../components/TimerBoxCountDownBtnIncrementDecrement';
import TimerBoxCountDownBtnReset from '../components/TimerBoxCountDownBtnReset';
import TimerBoxCountDownTotal from '../components/TimerBoxCountDownTotal';

import * as actions from '../actions/_actionCreators';


// grabs state property from the state object...
const mapStateToProps = (state) => ({ state });

// remove dispatch wrapper: store.dispatch({ this.props.action.removeTimer }) -> this.props.action.removeTimer...
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
};


const TimerBoxCountDown = React.createClass({

  render: function() {
    const {
      stopTicking,
      startTicking,
      actions
    } = this.props;

    let nextTimerId = 0;


    return (
      <div>
        <div className="countDownSettingsContainer">
          <input ref={node => {this.timeSetInput = node; }}
            type="number"
            placeholder="new time" />
          <button
            label="stuff"
            type="button"
            onClick={ () => {
              store.dispatch({
                type: 'SET_TIME',
                time: this.timeSetInput.value,
                id: nextTimerId++,
              });
            }}>OK</button>
            <TimerBoxCountDownBtnPausePlay
              onTimerBoxCountDownBtnPausePlayClick={ () => {
                startTicking(this.props.eachKey);
                }
              }

              onTimerBoxCountDownZero={ ()=> {
                const ifZeroStopTicking = () => {
                  if (this.props.eachTime < 1 && this.props.eachTicking === true)  {
                    stopTicking();
                  }
                };
                store.subscribe(ifZeroStopTicking);
              }
            }
              />

              <TimerBoxCountDownBtnIncrementDecrement
                onTimerBoxCountDownBtnIncrementClick={ () =>
                  store.dispatch({
                    type: 'INCREMENT',
                    id: this.props.eachKey
                  })
                }
                  onTimerBoxCountDownBtnDecrementClick={ () =>
                    store.dispatch({
                       type: 'DECREMENT',
                      id: this.props.eachKey
                    })
                  }
                    />
                  <TimerBoxCountDownBtnReset
                    onTimerBoxCountDownBtnResetClick={ () =>
                      store.dispatch({
                        type: 'RESET',
                        id: this.props.eachKey
                      })
                    }
                      />
                  </div>

                  <TimerBoxCountDownTotal
                    eachTime={ this.props.eachTime > 0 ? this.props.eachTime : 'end' }
                    />


                </div>
              );
            }
          });
export default connect(mapStateToProps, mapDispatchToProps)(TimerBoxCountDown);
