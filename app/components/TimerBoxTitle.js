import React from 'react';
import ReactDOM from 'react-dom';
import store from '../_Store';

const TimerBoxTitle = ({onTimerBoxTitleSet, eachTitle }) => {
	var titleSetInput;
	return (

		<div className="mdl-textfield mdl-js-textfield">
			<div className="">
				{eachTitle}
			</div>
			<input className="mdl-textfield__input" size='10' type="text" placeholder="Title"
				ref={
					node => {titleSetInput = node;}
				}
				onChange={() => {
					onTimerBoxTitleSet(titleSetInput);
				}} />

			</div>
		);
	};


	export default TimerBoxTitle;
