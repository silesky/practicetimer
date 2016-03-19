

//webpack --progress --colors --watch

import React from 'react';
import ReactDOM from 'react-dom';
import CountDownTotal from './CountDownTotal';
import CountDown from './CountDown';

import $ from 'jquery';
import draggable from 'jquery-ui';


/** * CountDown ***/

var Title = React.createClass({
  getInitialState: function () {
    return {
      titletext: 'default state',
      style: { background: 'white' }
    };
  },

  handleTitleInput: function (e) {
    console.log('handleTitleInput: ' + e.target.value);
    this.setState({
      titletext: e.target.value,
      style: { background: 'white' }
    });
  },

  handleTitleBlur: function () {
    this.setState({
      style: { background: 'red',
        color: 'white' }
    });

  },

  render: function () {
    return (
        <div>
          <input
            style={this.state.style}
            type="text"
            onBlur={this.handleTitleBlur}
            onChange={this.handleTitleInput} />
          <div>
            {this.state.titletext}
          </div>
        </div>
      );
  }

});


    /* T i m e r B o x: boards kid */
var TimerBox = React.createClass({

  componentDidMount: function() {
    $(this.getDOMNode()).draggable();
  },
  remove: function (i) {
    console.log('removing');
    console.log(this.props.boxcount + ' boxes left.');
    console.log('you removed index ' + this.props.index);
    this.props.onRemove(this.props.index);
         /* so this.remove calls onRemove() is just a roundabout
         way of calling literally this.onRemoveHandler (which decrements the state by one */
  },
  render: function () {
    return (
            <div className="timerBox" onRemove={this.remove}>

              <div className="topBarContainer">
                <div className="topBarLeft">
                  <div
                    onClick={this.remove}
                    className="btn btnComp btnCloseTimerComp">[-]</div>
                </div>
                <div className="topBarRight">
                </div>

              </div>
              <div className="titleContainer">
                <div className="titleComp">
                  <Title />
                </div>
              </div>

              <CountDown />




            </div>

          );
  }
});

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
  onRemoveHandler: function (index) {
    console.log('parent: removing...');
    var n = this.state.boxcount - 1;
    this.setState({ boxcount: n });
  },
        /* parent gives props as attributes */
  render: function() {
    var timerBoxesArr = [];
    for (var i = 0; i < this.state.boxcount; i++) {
      timerBoxesArr.push(
              <TimerBox
                boxcount={this.state.boxcount}
                index={i}
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
ReactDOM.render(
        <Board />,
        document.getElementById('timer')
      );

      // start static server
