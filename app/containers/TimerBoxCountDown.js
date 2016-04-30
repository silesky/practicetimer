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
    const startTicking = () => {
      console.log('startTicking()');
      // only start ticking if interval is not set (no double ticks)
      if (!this.ticking || !this.myInt) {
        store.dispatch({
          type: 'SET_TICKING_TRUE',
          id: this.props.eachKey
        });
        this.ticking = true;
        this.myInt = setInterval(
          () => store.dispatch({
            type: 'DECREMENT',
            id: this.props.eachKey }),
            1000);
          }
        }


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
            onTimerBoxCountDownStart={() => {
              startTicking();
          }
          }

            ifZero={()=> {
                    const list = () => {
                      if (this.props.eachTime < 0) {
                            window.clearInterval(this.myInt);
                            this.ticking = false;
                        }
                    };
                    store.subscribe(list);
              }
            }



            onTimerBoxCountDownStop={()=> {
                window.clearInterval(this.myInt);
                this.ticking = false;
                store.dispatch({
                  type: 'SET_TICKING_FALSE',
                  id: this.props.eachKey
                });
              }
            }

            eachTime={this.props.eachTime}
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
          module.exports = TimerBoxCountDown;
