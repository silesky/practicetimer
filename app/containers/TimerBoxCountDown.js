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

const TimerBoxCountDown = React.createClass({

  render: function() {

    const startTicking = (id) => {
      console.log('startTicking()');
      store.dispatch({
        type: 'SET_TICKING_TRUE',
        id
      });
      // count down, myInt
      this.myInt = setInterval(
        () => store.dispatch({
          type: 'DECREMENT',
          id  }),
          1000);
          console.log('my interval is: ' + this.myInt);
        };
        const stopTicking = (id) => {
          console.log('stopTicking()');


        };
        const getNextId = (stateArr = store.getState(), currentId = this.props.eachKey) => {
          const _getCurrentValueFromStateArr = () => {
            return stateArr.find((el) => el.id === currentId);
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
          console.log("ifZero()");
          // basically does the same thing as a while loop since it's called multiple times
            if (this.props.eachTime < 1 && this.props.eachTicking) {
              console.log('ifZero: if statement passed (time should be less than 1, current timer should be ticking)');
            store.dispatch({
                      type: 'SET_TICKING_FALSE',
                      id: this.props.eachKey,
                    });
            clearInterval(this.myInt);
            const _nextId = getNextId(store.getState(), this.props.eachKey);
            console.log('next ID: ' + _nextId);
            startTicking(_nextId);

          }
        };






        return (



          <div>
            <div className="TimerBoxCountDown_container">
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
