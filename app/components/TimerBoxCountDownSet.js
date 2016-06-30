// not being used
import React, { PropTypes } from 'react'

const TimerBoxCountDownSet = ({state, onTimerBoxCountDownSet}) => {
  return (
    <div>
    <input type="number" min="0" placeholder="secs"
          ref={ node => {
            this.timeSetInput = node;
          }}
              />
            <button label="stuff" onClick={ () => {
              onTimerBoxCountDownSet();
              } }>OK</button>
              </div>
  )
}

export default TimerBoxCountDownSet;
