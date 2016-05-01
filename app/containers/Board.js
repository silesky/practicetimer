import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import TimerBox from './TimerBox';
import BoardCountDownTotal from '../components/BoardCountDownTotal';

const mapStateToProps = (state) => ({ state });

/* all this board does is increment the timer */
const Board = React.createClass({
  render: function() {
    return(
      <div className="board">
        <BoardCountDownTotal />
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
        </div>
      );
    },
  });

  export default connect(mapStateToProps)(Board);
  /* drum roll */
