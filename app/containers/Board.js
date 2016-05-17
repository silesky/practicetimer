import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { dispatch,  bindActionCreators } from 'redux';

import TimerBox from './TimerBox';
import BoardCountDownTotal from '../components/BoardCountDownTotal';
import BoardBtnAdd from '../components/BoardBtnAdd';
import BoardBtnControls from '../components/BoardBtnControls';
import * as actions from '../actions/_actionCreators';
import store from '../_Store'


const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
};
// remove dispatch wrapper: store.dispatch({ this.props.action.removeTimer }) -> this.props.action.removeTimer...

/* all this board does is increment the timer */
const Board = React.createClass({
  render: function() {
    return(
      <div className="board">
        <BoardCountDownTotal />
        <BoardBtnControls />

      {
        this.props.state.map((el) => {
          return (
            <TimerBox
            eachKey={el.id}
            eachTime={el.time}
            eachTitle={el.title}
            eachTicking={el.ticking}
            />
          );
        })
      }
      <BoardBtnAdd
        onBoardBtnAddClick={ () => { store.dispatch({type: 'ADD_TIMER' })}  } />
        </div>
      );
    },
  });
//

  // onBoardBtnAddClick={  }
 export default connect(mapStateToProps, mapDispatchToProps)(Board);
  /* drum roll */
