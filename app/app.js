import React from "react";
console.log("app.js...")

var BtnAddTimer = React.createClass({
    render: function() {
        return(
            <div className="btn btnAddTimer">[+]</div>
        );

    }
});

var BtnCloseTimer = React.createClass({
    render: function() {
        return(
            <div className="btn btnCloseTimer">[-]</div>
        );

    }
});


//BtnCloseTimer, BtnCopyTimer, BtnAddTimer, CountDown, StartTimer

var TimerBox = React.createClass({
    render: function() {
        return(
            <div className="timerBox">
                <div className="topBar">

                    <div className="topBarLeft">
                        <BtnCloseTimer />
                    </div>
                    <div className="topBarRight">
                        <BtnAddTimer />
                    </div>

                </div>
            </div>




        );
    }
});






/* drum roll */
React.render(

    <TimerBox />,

    document.getElementById('timer')//where u want it
);
4
