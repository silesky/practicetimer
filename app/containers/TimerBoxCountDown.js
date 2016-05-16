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
const mapDispatchToProps = () => {
  return { actions: bindActionCreators(actions, dispatch)}
};


// var arr = [{id: 1}, {id: 2}, {id: 3}];



const TimerBoxCountDown = React.createClass({

  foo: function() {
    return 'foo';
  },
  render: function() {
    let myInt;

    const startTicking = (id) => {
      console.log('startTicking()');
      store.dispatch({
        type: 'SET_TICKING_TRUE',
        id
      });
      // count down, myInt
      clearInterval(myInt);
      myInt = setInterval(
        () => store.dispatch({
          type: 'DECREMENT',
          id  }),
          1000);
          console.log('my interval is: ' + myInt);

        };
        const stopTicking = (id) => {
          console.log('stopTicking()');
          clearInterval(myInt);
          store.dispatch({
            type: 'SET_TICKING_FALSE',
            id
          });
        };
        const getNextId = (stateArr = this.props.state, currentId = this.props.eachKey) => {
          const _getCurrentValueFromStateArr = () => {
            return stateArr.find((el) => el.id == currentId);
          };
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
          // must be 0 and ticking must be false
          if (this.props.eachTime < 1 && this.props.eachTicking) {
            console.log('ifZero()');
            stopTicking(this.props.eachKey);
            const _nextId = getNextId(this.props.state, this.props.eachKey);
            console.log('next ID: ' + _nextId);
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
