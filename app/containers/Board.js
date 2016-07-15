import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import TimerBox from './TimerBox';
import BoardCountDownTotal from '../components/BoardCountDownTotal';
import BoardBtnAdd from '../components/BoardBtnAdd';
import BoardBtnControls from '../components/BoardBtnControls';
import * as actionCreators from '../actions/_actionCreators';
import { nextInLine, findIdWhereTrue, secondsToMinutesAndHours } from '../util';

const Board = React.createClass({
  getTotal: function() {
    let displayString;
    let times = this.props.state.map(el => el.time);
    // w/o needs to check if array is empty reduce of empty array with no initial value
    if (typeof times !== 'undefined' && times.length > 0) {
      let totalSecs = times.reduce((p, n) => p + n);
      displayString = secondsToMinutesAndHours(totalSecs);
    } else {
      displayString = '0:00';
    }
    return displayString;
  },

// if there is an id, it means that paused is true somewhere, so isPaused evals to true.
  isItPaused: function() {
    return !!findIdWhereTrue(this.props.state, 'pause');
  },
  render() {
;
    return(
        <div>
        <header>
          <div className="BoardBtnControls-Container mdl-shadow--4dp">
            <BoardCountDownTotal total={this.getTotal()}/>
            <BoardBtnControls className={ this.isItPaused() ? 'paused' : 'notpaused' }
              onBoardBtnPlayClick={ () => { this.props.actions.startTicking(nextInLine(this.props.state)); } }
              onBoardBtnPauseClick={ () => { this.props.actions.pausePlay(); } }
              onBoardBtnResetClick={ () => { this.props.actions.resetAll(); } }
            />
          </div>
        </header>
        <div className="board">
        <ReactCSSTransitionGroup className="timer-container" transitionName="timerbox" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        {
          this.props.state.map((el) => {
            return (
              <TimerBox
              /* added redundant key prop so react devtools would stop complaining */
              key={ el.id }
              eachKey={ el.id }
              eachTime={ el.time }
              eachTitle={ el.title }
              eachTicking={ el.ticking }
              />
              );
          })
        }
        </ReactCSSTransitionGroup>
        <BoardBtnAdd
        onBoardBtnAddClick={ () => {
         /* dont need dispatch function anymore bc of mapDispatchToProps, mapStateToProps */
         this.props.actions.addTimer(this.props.state);
       }  }
       />
     </div>
     </div>
     );
  },
});


const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Board);
/* drum roll */
