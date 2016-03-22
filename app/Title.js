import React from 'react';
import ReactDOM from 'react-dom';

var Title = React.createClass({
  getInitialState: function () {
    return {
      titletext: 'default state',
      style: { background: 'white' }
    };
  },

  handleTitleInput: function (e) {
    console.log('handleTitleInput: ' + e.target.value);
    this.setState({
      titletext: e.target.value,
      style: { background: 'white' }
    });
  },

  handleTitleBlur: function () {
    this.setState({
      style: { background: 'red',
      color: 'white' }
    });

  },

  render: function () {
    return (
      <div>
      <input
      style={this.state.style}
      type="text"
      onBlur={this.handleTitleBlur}
      onChange={this.handleTitleInput} />
      <div>
      {this.state.titletext}
      </div>
      </div>
      );
    }

  });

  module.exports = Title;
