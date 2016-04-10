import React from 'react';
import ReactDOM from 'react-dom';
import TimerBox from '../components/TimerBox';
import CountDownTotal from '../components/CountDownTotal';

const Board = React.createClass({

  getInitialState: function () {
    return {
            boxcount: 1
          };
  },
  add: function () {
    var n = this.state.boxcount + 1;
    this.setState({ boxcount: n });
  },
  onRemoveHandler: function (key) {
    console.log('parent: removing...');
    var n = this.state.boxcount - 1;
    this.setState({ boxcount: n });
  },
  render: function() {
    const timerBoxesArr = [];
    for (let i = 0; i < this.state.boxcount; i++) {
      timerBoxesArr.push(
              <TimerBox
                boxcount={this.state.boxcount}
                key={i}
                onRemove={this.onRemoveHandler} />
            );
          }
    return(
            <div className="board">
              <CountDownTotal />
              <div
              className="btn btnComp btnAddTimerComp"
                onClick={this.add}>
                [+]
              </div>
              {timerBoxesArr}
            </div>
          );
  },
});

module.exports = Board;
      /* drum roll */
