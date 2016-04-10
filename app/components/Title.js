import React from 'react';
import ReactDOM from 'react-dom';
import store from '../_Store';

var Title = React.createClass({
  getInitialState: function () {
    return {
      titletext: 'default state',
      style: { background: 'white' }
    };
  },

  // handleTitleInput: function (e) {
  //   console.log('handleTitleInput: ' + e.target.value);
  //   this.setState({
  //     titletext: e.target.value,
  //     style: { background: 'white' }
  //   });
  // },

  handleTitleBlur: function () {
    this.setState({
      style: { background: 'red',
        color: 'white' }
      });

    },


    render: function () {
      return (
        <div>
          <input ref={node => {this.titleSetInput = node;}}
            style={this.state.style}
            type="text"
            onBlur={this.handleTitleBlur}
            onChange={() => {
              store.dispatch({
                type: 'SET_TITLE',
                text: this.titleSetInput.value,
              });
            } } />
          <div>
            {store.getState().text}
          </div>
          <div>

          </div>
        </div>
      );
    }

  });

  module.exports = Title;
