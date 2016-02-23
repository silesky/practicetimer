import React from "react";
// import Greeting from "./greeting";
console.log("app.js...")

var BtnAddTimer = React.createClass({
  render: function() {
    return(
      <div className="btnAddTimer">ADD</div>
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

