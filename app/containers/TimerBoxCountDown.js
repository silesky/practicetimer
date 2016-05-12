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


// var arr = [{id: 1}, {id: 2}, {id: 3}];



const TimerBoxCountDown = React.createClass({



  render: function() {
    function myLog() {
      console.log(store.getState(127));
    }
    store.subscribe(myLog);
    const {
      stopTicking,
      startTicking,
      actions
    } = this.props;

  const getNextId = (stateArr = this.props.state, currentId = this.props.eachKey) => {
    const _getCurrentValueFromStateArr = () => {
      return stateArr.find((el) => el.id == currentId);
    }
    const _getNextIdFromCurrentValue = (currentValue) => {
      let index = stateArr.indexOf(currentValue);
      if (index >= 0 && index < stateArr.length - 1) {
        const nextItem = stateArr[index + 1];
        return nextItem.id;
      } else {
        return 0;
      }
    }
    let nextId = _getNextIdFromCurrentValue(_getCurrentValueFromStateArr());
    
    return nextId;
  };

const ifZero = () => {
  const myId =  getNextId(this.props.state, this.props.eachKey);
  if (this.props.eachTime <= 1 && this.props.eachTicking === true)  {
      let _key = this.props.eachKey;
      let _state = this.props.state;
      actions.setTickingFalse(_key);
      stopTicking(_key);
    /* get next object */
      const _nextId = getNextId(_state, _key);
      startTicking(_nextId);
    }
};






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


                store.subscribe(ifZero);


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
