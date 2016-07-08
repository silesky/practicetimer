import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TimerBox from './TimerBox';
import BoardCountDownTotal from '../components/BoardCountDownTotal';
import BoardBtnAdd from '../components/BoardBtnAdd';
import BoardBtnControls from '../components/BoardBtnControls';
import * as actionCreators from '../actions/_actionCreators';
import { nextInLine, getTickingId } from '../util';


// remove dispatch wrapper: store.dispatch({ this.props.action.removeTimer }) -> this.props.action.removeTimer...

/* all this board does is increment the timer */
const Board = React.createClass({
  getTotal: function() {
    let mins;
    let times = this.props.state.map(el => el.time);
    // w/o needs to check if array is empty reduce of empty array with no initial value
    if (typeof times !== 'undefined' && times.length > 0) {
      let totalSecs = times.reduce((p, n) => p + n);
      mins = Math.round(totalSecs / 60); 
    } else {
      mins = 0;
    } 
    return mins;
  },
  render() {
    return(
      <div className="board">
        <div className="BoardBtnControls-Container">
          <BoardCountDownTotal total={this.getTotal()}/>
          <BoardBtnControls
            onBoardBtnPlayClick={ () => { this.props.actions.startTicking(nextInLine(this.props.state)); } }
            onBoardBtnPauseClick={ () => { this.props.actions.pauseTimer(getTickingId(this.props.state)); } }
            onBoardBtnResetClick={ () => { this.props.actions.resetAll(); } }
          />
        </div>
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
        <BoardBtnAdd
        onBoardBtnAddClick={ () => {
         /* dont need dispatch function anymore bc of mapDispatchToProps, mapStateToProps */
         this.props.actions.addTimer(this.props.state);
       }  }
       />
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
