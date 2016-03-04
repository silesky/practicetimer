/* jshint
esversion: 6  */
/* TODO
. add an edit button (when you click the number, it should change to a form)
. find a way to pause the timer... create a "ticking 'state'"

/* webpack --progress --colors --watch */
import React from 'react';
import ReactDOM from 'react-dom';
console.log("app.js...");
//todo-- change from refs to class
//created a Title component, and added an input box. right now it just inherits the props... input box should use an onchange e ent

/*** CountDown ***/


var Title = React.createClass({

  getInitialState: function() {
      return {
        titletext: "default state",
        style: {background: 'white' }
      };
  },

  handleTitleInput: function(e) {
    console.log("handleTitleInput: " + e.target.value);
    this.setState({
      titletext: e.target.value,
      style: {background: 'white'}
    });
  },

  handleTitleBlur: function() {
    this.setState({
      style: {background: 'red',
                  color: 'white'}
    });

  },

  render: function() {
    return (
      <div>
      <input style={this.state.style} type="text" onBlur={this.handleTitleBlur} onFocus={this.handleTitleInput}/>
      <div>{this.state.titletext}</div>
      </div>
    );
  }

});

var CountDown = React.createClass({

  getInitialState: function() {
    return {secondsElapsed: 10,
                  ticking: false,
                  paused: true};
  },
  componentDidMount: function() {
    // (???) called right after render. setInterval takes calls this.tick every 10000ms...
  },
  componentWillUnmount: function() {
    // (???) called at the end, right before the component is destroyed/deleted...
    this.countDownStop();
  },
  tick: function() {
    // every time this is called, counter goes down by 1
    this.setState({secondsElapsed: this.state.secondsElapsed - 1});
  },
  countDownStart: function() {
      clearInterval(this.interval);
      this.interval = setInterval(this.tick, 1000);
      this.setState({ticking: true});
  },
  countDownStop: function() {
        clearInterval(this.interval);
        this.setState({ticking: false});
  },
  reset: function() {
    this.countDownStop();
    var stateObj = this.getInitialState();
    var newNum = stateObj.secondsElapsed;
    this.setState({
        secondsElapsed: newNum
      });
  },


  edit: function() {
    var v =  this.refs.editNum.getDOMNode().value;
    this.setState({
        secondsElapsed: v
      });
  },
  pausePlay: function() {
     if (!this.state.ticking) {
      console.log("pause-play");
      this.countDownStart();
      this.setState({ paused: false});
    } else {
      this.setState({ paused: true});
      this.countDownStop();
    }
  },
  incrementTime: function() {
    console.log("increment");

  },
  decrementTime: function() {
    console.log("decrement");
  },

  render: function() {

    var timerText;
    if (this.state.secondsElapsed > 0) {
      timerText = this.state.secondsElapsed;
    } else {
      timerText = "done.";
    }
    return (
      <div>
      <div className="countDownSettingsContainer">


        <input type="number" placeholder="new time" ref="editNum" />
        <button label="stuff" type="button" onClick={this.edit}>OK</button>
        <div className="countDownBtnPausePlay btn"
            onClick={this.pausePlay}>[=>]</div>

        <div className="setTimerUpDnContainer btn">
          <div className="setTimerUpComp"
            onClick={this.incrementTime}>[up]</div>
          <div className="setTimerDnComp"
            onClick={this.decrementTime}>[dn]</div>
        </div>
        <div className="countDownBtnReset btn"
          onClick={this.reset}>[r]</div>

      </div>
      <div className="countDownText">
        {timerText}
      </div>
</div>


    );
  }
});

/***/


/* Child inherits props */
var TimerBox = React.createClass({

  remove: function(i) {
    console.log("removing");
    console.log(this.props.boxcount + " boxes left.");
    console.log("you removed index " + this.props.index);
    this.props.onRemove(this.props.index);  //so this.remove calls onRemove() is just a roundabout way of calling literally this.onRemoveHandler (which decrements the state by one
  },
  render: function() {
    return(
      <div className="timerBox" onRemove={this.remove}>

        <div className="topBarContainer">
          <div className="topBarLeft">
            <div onClick={this.remove} className="btn btnComp btnCloseTimerComp">[-]</div>
          </div>
          <div className="topBarRight">
          </div>

        </div>
        <div className="titleContainer">
            <div className="titleComp"><Title /></div>
        </div>

        <CountDown />




      </div>

    );
  }
});

/** Parent **/
var Board = React.createClass({
  getInitialState: function() {
    return {
      boxcount: 1
    };
  },
  add: function() {
    var n = this.state.boxcount + 1;
    this.setState({boxcount: n});
  },
  onRemoveHandler: function(index) {
    console.log('parent: removing...');
      var n = this.state.boxcount -1;
      this.setState({boxcount: n});
  },
/* parent gives props as attributes */
  render: function() {
    var timerBoxesArr = [];
      for (var i = 0; i < this.state.boxcount; i++) {
          timerBoxesArr.push(<TimerBox boxcount={this.state.boxcount} index={i} onRemove={this.onRemoveHandler}/>);
      }


    return (
    <div className="board" >

      {timerBoxesArr}
      <div onClick={this.add} className="btn btnComp btnAddTimerComp">[+]</div>
      </div>

  );
  }
});

/* drum roll */
ReactDOM.render(
  <Board />,
  document.body
);

//start static server
