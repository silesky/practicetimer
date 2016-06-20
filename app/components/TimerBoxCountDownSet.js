// not being used
import React, { PropTypes } from 'react'

const TimerBoxCountDownSet = ({state, onTimerBoxCountDownSet}) => {
  console.log(state);
  return (
    <div>
    <input type="number" min="0" placeholder="secs"
          ref={ node => {
            this.timeSetInput = node;
          }}
              />
            <button label="stuff" onClick={ () => {
              onTimerBoxCountDownSet();
                console.log('sup');
              } }>OK</button>
              </div>
  )
}

export default TimerBoxCountDownSet;
