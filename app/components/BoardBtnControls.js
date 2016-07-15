import React from 'react';
import ReactDOM from 'react-dom';

const BoardBtnControls = ({ onBoardBtnPlayClick, onBoardBtnPauseClick, onBoardBtnResetClick, className }) => {
    return (
    <div className="BoardBtnControls">

          <i className={`fa fa-pause fa-2x pauseBtnCtrl ${className}`}  onClick={ () => onBoardBtnPauseClick() } ></i>
          <i className={`fa fa-play fa-2x playBtnCtrl ${className}`}  onClick={ () => onBoardBtnPlayClick() } ></i>
            <i className="fa fa-refresh fa-2x" onClick={ () => onBoardBtnResetClick() } ></i>

    </div>          
    );
  };


module.exports = BoardBtnControls;
