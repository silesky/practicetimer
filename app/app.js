

//webpack --progress --colors --watch

import React from 'react';
import ReactDOM from 'react-dom';
import CountDownTotal from './CountDownTotal';
import CountDown from './CountDown';
import TimerBox from './TimerBox';

import Title from './Title';
import $ from 'jquery';
import draggable from 'jquery-ui';
import store from './_Store';


/*
TimerUp
TimerDn
*/


import { Provider } from 'react-redux'



    /* T i m e r B o x: boards kid */

      /** B o a r d * */

var Board = React.createClass({

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
        /* parent gives props as attributes */
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
      /* drum roll */
const renderRoot = () => {
  ReactDOM.render(
    <Provider store={store}>
        <Board />
    </Provider>,
    document.getElementById('timer')
      );
};
store.subscribe(renderRoot);
renderRoot(); // initial render method (chapter 19)
