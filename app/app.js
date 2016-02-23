import React from "react";
// import Greeting from "./greeting";
console.log("app.js...")


var TimerBox = React.createClass({
  render: function() {
    return(
      <div className="timerBox">I'm a timer</div>
      );
  }     
});

React.render(
  //<Greeting name="World"/>
  <TimerBox />,
  
  document.getElementById('timer')//where u want it
);
