import React from 'react';
import ReactDOM from 'react-dom';
import store from '../_Store';

const Title = React.createClass({
  render: function() {
    return (
      <div>
        <input ref={node => {this.titleSetInput = node;}}
          type="text"
          onChange={() => {
            store.dispatch({
              type: 'SET_TITLE',
              text: this.titleSetInput.value,
              id: this.props.eachKey
            });
          } } />
          <div>
            { this.props.eachTitle}
          </div>
          <div>

          </div>
        </div>
      );
    }

  });

  module.exports = Title;
