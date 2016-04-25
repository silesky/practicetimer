import React from 'react';
import ReactDOM from 'react-dom';
import TimerBox from './TimerBox';
import BoardCountDownTotal from '../components/BoardCountDownTotal';
import { bindActionCreators } from 'redux';
import store from '../_Store';


const Board = React.createClass({
  render: function() {

    /* al this board does is increment the timer */
    return(
      <div className="board">
        <BoardCountDownTotal />
        { store.getState().map((el) => {
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

  export default Board;
  /* drum roll */
