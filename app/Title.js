import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from '../node_modules/redux';
import { createStore } from 'redux';

function reduxTest() {
  
  const reducer = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      default:
        return state;
    }
  }
  const store = createStore(reducer);

  console.log(store.getState());
  var node = document.getElementById('timer');
  node.addEventListener('click', function () {
    store.dispatch({ type: 'INCREMENT' });
    console.log(store.getState());
  });

}
reduxTest();

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
