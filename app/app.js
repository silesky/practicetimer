/* jshint esversion: 6 */
/* http://localhost:9080/app */
import React from "react";
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
    render: function() {
        return(

                <div className="countDownComp">30:00</div>

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
React.render(
  <TimerBox />,
  document.getElementById('timer')
);
