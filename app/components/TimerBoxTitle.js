import React from 'react';

const TimerBoxTitle = ({onTimerBoxTitleSet, eachTitle }) => {
	let titleSetInput;
	return (

		<div className="TimerBoxTitle-container">
			{/* <div className="TimerBoxTitle-text">
				{eachTitle}
			</div> */}
			<input className="TimerBoxTitle-input mdl-textfield__input" size='10' type="text" placeholder="Title"
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
