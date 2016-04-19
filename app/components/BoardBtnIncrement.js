import React, { PropTypes } from 'react'

const BoardBtnIncrement = ({  onBoardBtnIncrementClick }) => {
  return (
    <div
    className="btn btnComp btnAddTimerComp"
    onClick={() => {
      console.log('onBoardBtnIncrementClick');
      onBoardBtnIncrementClick();
    } }>
      [+]
    </div>
  )
}

export default BoardBtnIncrement;
