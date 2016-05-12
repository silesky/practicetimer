/* eslint-disable */
import { assert } from 'Chai';
import React from 'react';
import redux from 'redux';
import store from '../app/_Store.js';
import reducer from '../app/reducers/_Reducer.js';

module.exports = function() {

  describe('**MY REDUCER TESTS**', function() {
    describe('set ticking true...', function() {
    it('store.getState()[0].ticking should return true when action: SET_TICKING_TRUE is dispatched...', function() {
      store.dispatch({ type: 'SET_TICKING_TRUE', id: 1 })
      assert.equal(store.getState()[0].ticking, true);
    });
  });

  describe('set ticking false...', function() {
    it('store.getState()[0].ticking should return false after action: SET_TICKING_FALSE is dispatched...', function() {
      store.dispatch({ type: 'SET_TICKING_FALSE', id: 1 });
      assert.equal(store.getState()[0].ticking, false);
    });
  });
});
}
//I think i need to pass in the clear interval component
