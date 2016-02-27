/* jshint esversion: 6 */
/* http://localhost:9080/app */
import React from "react";
import ReactDOM from 'react-dom';
console.log("app.js...");

//BtnCloseTimer, BtnAddTimer, BtnCopyTimer,  CountDown, StartTimer, setTimerUp, setTimerDn

var BtnAddTimer = React.createClass({
    render: function() {
        return(
            <div className="btnComp btnAddTimerComp">[+]</div>
        );

    }
});

var BtnCloseTimer = React.createClass({
    render: function() {
        return(
            <div className="btnComp btnCloseTimerComp">[-]</div>
        );

    }
});

var Title = React.createClass({
    render: function() {
        return(
            <div className="titleComp">Practicing Guitar</div>
        );

    }
});


var CountDown = React.createClass({


    getInitialState: function() {
        return {time: 0}
    },

    tick: function() {

      // grab the Date() every 50 secs. Then subtr that value from the og date to get the actual secs diff
      var getCurrentTime =  function() {
            var dateObj = new Date();
            return dateObj.getTime();
      };
      var ogTime = getCurrentTime();
      this.setState({
        time:  getCurrentTime()});
    },
    componentDidMount: function() {
      // (???) called right after render. setInterval takes calls this.tick every 50ms...

      this.timer = setInterval(this.tick, 1000);
    },
    componentWillUnmount: function() {
      // (???) called at the end, right before the component is destroyed/deleted...
      //
      clearInterval(this.timer);
    },


    render: function() {

        return(

                <div className="countDownComp">{ this.state.time }</div>


        );
    }
});


var SetTimerUpDn = React.createClass({
  render: function() {
    return(
      <div className="setTimerUpDnContainer">
        <div className="setTimerUpComp">[up]</div>
        <div className="setTimerDnComp">[dn]</div>
      </div>
    );
  }
});

var TimerBox = React.createClass({
    render: function() {
        return(
            <div className="timerBox">

                <div className="topBarContainer">
                    <div className="topBarLeft">
                        <BtnCloseTimer />
                    </div>
                    <div className="topBarRight">
                        <BtnAddTimer />
                    </div>

                </div>
                <div className="titleContainer">
                    <Title />
                </div>


                <div className="countDownContainer">

                    <CountDown />
                      <SetTimerUpDn />
                </div>

              </div>

        );
    }
});




/* drum roll */
ReactDOM.render(
  <TimerBox />,
  document.getElementById('timer')
);
