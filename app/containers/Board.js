import React from 'react';
import ReactDOM from 'react-dom';
import TimerBox from './TimerBox';
import CountDownTotal from '../components/CountDownTotal';
import BoardBtnIncrementDecrement from '../components/BoardBtnIncrementDecrement';
import { connect } from 'react-redux';
import store from '../_Store';


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
                  onBoardBtnIncrementClick={() => store.dispatch({ type: 'INCREMENT_TIMERCOUNT' }) }
                  onBoardBtnDecrementClick={() => store.dispatch({ type: 'DECREMENT_TIMERCOUNT' }) }
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

export default connect(mapStateToProps)(Board)
      /* drum roll */
