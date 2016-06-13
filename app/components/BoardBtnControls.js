import React from 'react';
import ReactDOM from 'react-dom';

const BoardBtnControls = ({ onBoardBtnPlayClick, onBoardBtnPauseClick }) => {
    return (
    <div className="BoardBtnControls">

          <i className="fa fa-pause fa-2x"  onClick={ () => onBoardBtnPauseClick() } ></i>
          <i className="fa fa-play fa-2x" onClick={ () => onBoardBtnPlayClick() } ></i>
    </div>
    );
  };


module.exports = BoardBtnControls;
