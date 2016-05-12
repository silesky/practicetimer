import React from 'react';

const BoardBtnAdd = ({ onBoardBtnAddClick }) => {
  return (
    <div
    onClick={() => {
      console.log('boardbtnadd');
      onBoardBtnAddClick(); } }
      className="btnComp BoardTimerBoxBtnAdd" >
      [+]
    </div>
  );
};

export default BoardBtnAdd;
