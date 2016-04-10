import React from 'react';
import ReactDOM from 'react-dom';
import store from '../_Store';

var CountDown = React.createClass({

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
              <div
                className="countDownBtnPausePlay btn"
                onClick={() => store.dispatch({ type: 'PAUSEPLAY' })}>[=>]</div>
              <div className="setTimerUpDnContainer btn">
                <div
                  className="setTimerUpComp"
                  onClick={() => store.dispatch({ type: 'INCREMENT' })}>[up]</div>
                <div
                  className="setTimerDnComp"
                  onClick={() => store.dispatch({ type: 'DECREMENT' })}>[dn]</div>
              </div>
              <div
                className="countDownBtnReset btn"
                onClick={() => store.dispatch({ type: 'RESET' })}>[r]</div>

            </div>
            <div className="countDownTextContainer">
              <div className="countDownText">{store.getState().time}</div>
            </div>
          </div>


        );
  }
});
module.exports = CountDown;
