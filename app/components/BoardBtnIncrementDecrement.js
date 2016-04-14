import React, { PropTypes } from 'react'

const BoardBtnIncrementDecrement = ({  onBoardBtnIncrementClick, onBoardBtnDecrementClick }) => {
  return (

<div>
    <div
    className="btn btnComp btnAddTimerComp"
    onClick={() => {
      console.log('onBoardBtnIncrementClick');
      onBoardBtnIncrementClick();
    } }>
      [+]
    </div>

      <div
        className="btn btnComp btnRemoveTimerComp"
        onClick={() => {
          console.log('onBoardBtnDecrementClick');
          onBoardBtnDecrementClick();
        } }>
        [-]

      </div>
  </div>
  )
}

export default BoardBtnIncrementDecrement;
