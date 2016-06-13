import React from 'react';

const BoardBtnAdd = ({ onBoardBtnAddClick }) => {
  return (
    <div
    onClick={() => {
      console.log('boardbtnadd');
      onBoardBtnAddClick(); } }
      className="BoardTimerBoxBtnAdd" >
      <i className="fa fa-plus-square fa-5x" aria-hidden="true"></i>

    </div>
  );
};

export default BoardBtnAdd;
