// increment, decrement

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';

// import TimerBoxCountDownBtnPausePlay from '../components/TimerBoxCountDownBtnPausePlay';
import TimerBoxCountDownBtnIncrementDecrement from '../components/TimerBoxCountDownBtnIncrementDecrement';

import TimerBoxCountDownTotal from '../components/TimerBoxCountDownTotal';


import * as actionCreators from '../actions/_actionCreators';
import store from '../_Store';



const TimerBoxCountDown = React.createClass({
  render: function() {
        return (
          <div>
            <div className="TimerBoxCountDown_container">
              <input type="number" min="0" placeholder="secs"
                ref={ node => {this.timeSetInput = node; }}
                />
              <button label="stuff"
                onClick={ () => {
                  store.dispatch({
                    type: 'SET_TIME',
                    time: this.timeSetInput.value,
                    id: this.props.eachKey
                  });
                } }>OK</button>


            <TimerBoxCountDownBtnIncrementDecrement
              onTimerBoxCountDownBtnIncrementClick={ () => this.props.actions.increment(this.props.eachKey) }
              onTimerBoxCountDownBtnDecrementClick={ () => this.props.actions.decrement(this.props.eachKey) }
              />

          </div>

          <TimerBoxCountDownTotal
            eachTime={ this.props.eachTime > 0 ? this.props.eachTime : 'end' }
            />


        </div>
      );
    }
  });
  // grabs state property from the state object...
  const mapStateToProps = (state) => ({ state });

  const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actionCreators, dispatch)}
  };
  export default connect(mapStateToProps, mapDispatchToProps)(TimerBoxCountDown);
