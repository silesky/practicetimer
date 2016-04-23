import React from 'react';
import ReactDOM from 'react-dom';
import store from '../_Store';

const TimerBoxTitle = ({onTimerBoxTitleSet, eachTitle }) => {
	var titleSetInput;
	return (

		<div className="titleComp">
			<input type="text"
				ref={
					node => {titleSetInput = node;}
				}
				onChange={() => {
					onTimerBoxTitleSet(titleSetInput);
				}} />
				<div>
					{eachTitle}
				</div>
			</div>
		);
	};


	export default TimerBoxTitle;
