import React from 'react';
import ReactDOM from 'react-dom';
import store from '../_Store';
import TimerBoxCountDownBtnPausePlay from '../components/TimerBoxCountDownBtnPausePlay';
import TimerBoxCountDownBtnIncrementDecrement from '../components/TimerBoxCountDownBtnIncrementDecrement';
import TimerBoxCountDownBtnReset from '../components/TimerBoxCountDownBtnReset';
import TimerBoxCountDownTotal from '../components/TimerBoxCountDownTotal';
const TimerBoxCountDown = React.createClass({

  render: function() {
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
            onClick={() => {
              store.dispatch({
                type: 'SET_TIME',
                time: this.timeSetInput.value,
                id: nextTimerId++,
              });
            }}>OK</button>
            <TimerBoxCountDownBtnPausePlay
              onTimerBoxCountDownBtnPausePlayClick={ () =>
                store.dispatch({ type: 'PAUSEPLAY' }) } />

              <TimerBoxCountDownBtnIncrementDecrement
                onTimerBoxCountDownBtnIncrementClick={ () =>
                  store.dispatch({ type: 'INCREMENT' }) }
                  onTimerBoxCountDownBtnDecrementClick={() =>
                    store.dispatch({ type: 'DECREMENT' }) }
                    />
                  <TimerBoxCountDownBtnReset
                    onTimerBoxCountDownBtnResetClick={ () =>
                      store.dispatch({ type: 'RESET' }) }
                      />
                  </div>

                  <TimerBoxCountDownTotal
                    eachTime={ this.props.eachTime }
                    />


                </div>
              );
            }
          });
          module.exports = TimerBoxCountDown;