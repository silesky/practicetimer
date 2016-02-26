import React from "react";
console.log("app.js...")

var BtnAddTimer = React.createClass({
  render: function() {
    return(
      <div className="btnAddTimer">ADD</div>
      );

  }
});

var BtnCloseTimer = React.createClass({
  render: function() {
    return(
      <div className="btnCloseTimer">X</div>
      );

  }
});


//BtnCloseTimer, BtnCopyTimer, BtnAddTimer, CountDown, StartTimer

var TimerBox = React.createClass({
  render: function() {
    return(
      <div className="timerBox">
        <BtnAddTimer />
      </div>
      );
  }
});






/* drum roll */
React.render(

  <TimerBox />,

  document.getElementById('timer')//where u want it
);
