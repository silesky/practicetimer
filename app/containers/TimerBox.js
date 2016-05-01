import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import draggable from 'jquery-ui';
import { dispatch,  bindActionCreators } from 'redux';
import { connect  } from 'react-redux';

import store from '../_Store';
import TimerBoxTitle from '../components/TimerBoxTitle';
import TimerBoxCountDown from './TimerBoxCountDown';
import TimerBoxBtnAdd from '../components/TimerBoxBtnAdd';
import TimerBoxBtnClose from '../components/TimerBoxBtnClose';

import * as actions from '../actions/_actionCreators';

// grabs state property from the state object...
const mapStateToProps = (state) => ({ state });

// remove dispatch wrapper: store.dispatch({ this.props.action.removeTimer }) -> this.props.action.removeTimer...
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
};

const TimerBox = React.createClass({
  componentDidMount: function() {
    $(ReactDOM.findDOMNode(this)).draggable();

  },


  render: function() {

// remove props wrapper:this.props.action.removeTimer... -> action.removeTimer...
    const {
      eachTime,
      eachKey,
      eachTitle,
      actions
    } = this.props;

    return (
      <div className="timerBox">
        <div className="topBarContainer">
          <div className="topBarLeft">
            <TimerBoxBtnClose
              onTimerBoxBtnCloseClick={ actions.removeTimer.bind(this, eachKey) }
              />

          </div>
          <div className="topBarRight">
            <TimerBoxBtnAdd
              onTimerBoxBtnAddClick={ actions.addTimer.bind(this, eachKey) }

              />
          </div>
          <div className="titleContainer">

            <TimerBoxTitle
              onTimerBoxTitleSet={
                (titleSetInput) => {
                  store.dispatch({
                    type: 'SET_TITLE',
                    text: titleSetInput.value,
                    id: eachKey
                  });
                }
              }

              eachKey={ eachKey }
              eachTitle={ eachTitle }
              />
          </div>

          <TimerBoxCountDown
            eachKey={ eachKey }
            eachTime={ eachTime }
            eachTicking = { this.props.eachTicking }  />

        </div>
      </div>

    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TimerBox);
