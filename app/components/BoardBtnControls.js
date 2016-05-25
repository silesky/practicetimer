import React from 'react';
import ReactDOM from 'react-dom';

const BoardBtnControls = ({ onBoardBtnPausePlayClick}) => {
    return (

    <div className="BoardBtnControls">

        <div className="BoardBtnPausePlay"
              onClick={() => {
                              console.log('onBoardBtnPausePlayClick');
                  onBoardBtnPausePlayClick();

                  }
              } >
            <i className="fa fa-play-circle-o fa-2x"></i>
      </div>

    </div>
    );
  };


module.exports = BoardBtnControls;
