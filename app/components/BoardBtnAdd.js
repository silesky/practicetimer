import React from 'react';

const BoardBtnAdd = ({ onBoardBtnAddClick }) => {
  return (
    <div
    onClick={() => {
      console.log('boardbtnadd');
      onBoardBtnAddClick(); } }
      className="" >
      <button className="mdl-button mdl-js-button  mdl-js-ripple-effect mdl-button--fab mdl-button--colored">
        <i className="material-icons">add</i>
      </button>
      </div>
      );
};

export default BoardBtnAdd;
