import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';

//import TimerBoxCountDownBtnPausePlay from '../components/TimerBoxCountDownBtnPausePlay';
import TimerBoxCountDownBtnIncrementDecrement from '../components/TimerBoxCountDownBtnIncrementDecrement';
import TimerBoxCountDownBtnReset from '../components/TimerBoxCountDownBtnReset';
import TimerBoxCountDownTotal from '../components/TimerBoxCountDownTotal';


import * as actionCreators from '../actions/_actionCreators';
import store from '../_Store';



const TimerBoxCountDown = React.createClass({
  componentDidMount: function() {
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
          },
  render: function() {

        const getNextId = (stateArr = this.props.state.getState(), currentId = this.props.eachKey) => {
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
  // grabs state property from the state object...
  const mapStateToProps = (state) => ({ state });

  const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actionCreators, dispatch)}
  };
  export default connect(mapStateToProps, mapDispatchToProps)(TimerBoxCountDown);
