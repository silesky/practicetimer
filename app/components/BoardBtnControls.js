import React from 'react';
import ReactDOM from 'react-dom';

const BoardBtnControls = ({ onBoardBtnPlayClick, onBoardBtnPauseClick }) => {
    return (
    <div className="BoardBtnControls">
          <i className="fa fa-play-circle-o fa-2x" onClick={ () => onBoardBtnPlayClick() } ></i>
          <i className="fa fa-pause-circle-o fa-2x"  onClick={ () => onBoardBtnPauseClick() } ></i>
    </div>
    );
  };


module.exports = BoardBtnControls;
