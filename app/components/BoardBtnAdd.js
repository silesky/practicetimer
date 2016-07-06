import React from 'react';

const BoardBtnAdd = ({ onBoardBtnAddClick }) => {
  return (
    <div
    onClick={() => {
      console.log('boardbtnadd');
      onBoardBtnAddClick(); } }
      className="" >
      <a href="#!" className="waves-effect waves-circle waves-light btn-floating secondary-content">
        <i className="material-icons">add</i>
      </a>


    </div>
  );
};

export default BoardBtnAdd;
