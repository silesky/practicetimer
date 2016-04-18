import React from 'react';
import ReactDOM from 'react-dom';
import TimerBox from './TimerBox';
import CountDownTotal from '../components/CountDownTotal';
import BoardBtnIncrementDecrement from '../components/BoardBtnIncrementDecrement';
import { connect } from 'react-redux';
import store from '../_Store';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/_actionCreators';


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      actionIncrementTimercount: actionCreators.actionIncrementTimercount,
      actionDecrementTimercount: actionCreators.actionDecrementTimercount
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
                <CountDownTotal />
                <BoardBtnIncrementDecrement
                  onBoardBtnIncrementClick={this.props.actionIncrementTimercount}
                  onBoardBtnDecrementClick={this.props.actionDecrementTimercount}
                />

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

export default connect(mapStateToProps, mapDispatchToProps)(Board)
      /* drum roll */
