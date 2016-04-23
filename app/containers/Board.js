import React from 'react';
import ReactDOM from 'react-dom';
import TimerBox from './TimerBox';
import BoardCountDownTotal from '../components/BoardCountDownTotal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as actionCreators from '../actions/_actionCreators';


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    // actionIncrementTimercount: actionCreators.actionIncrementTimercount,
    // actionDecrementTimercount: actionCreators.actionDecrementTimercount
  }, dispatch);
};

const mapStateToProps = function(state) {
  return {
    timerBoxReducer: state.timerBoxReducer,
  };
};

const Board = React.createClass({
  render: function() {

    /* al this board does is increment the timer */
    return(
      <div className="board">
        <BoardCountDownTotal />
        { this.props.timerBoxReducer.map((el) => {
          return(<TimerBox
            eachKey={el.id}
            eachTime={el.time}
            eachTitle={el.title}
            />);
          }) }
        </div>
      );
    },
  });

  export default connect(mapStateToProps, mapDispatchToProps)(Board);
  /* drum roll */
