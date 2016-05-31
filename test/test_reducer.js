/* eslint-disable */
import { assert } from 'chai';
import React from 'react';
import redux from 'redux';
import store from '../app/_Store.js';
import reducer from '../app/reducers/_Reducer.js';
import TestUtils from 'react-addons-test-utils';
import * as actionCreators from '../app/actions/_actionCreators';
module.exports = function() {

  describe('* * * reducer * * *', function() {
    describe('set ticking true:', function() {
      it('store.getState()[0].ticking should return true when action: SET_TICKING_TRUE is dispatched.', function() {
      store.dispatch({ type: 'SET_TICKING_TRUE', id: 1 })
      assert.equal(store.getState()[0].ticking, true);
    });
  });
  describe('set ticking false:', function() {
    it('store.getState()[0].ticking should return false after action: SET_TICKING_FALSE is dispatched.', function() {
      store.dispatch({ type: 'SET_TICKING_FALSE', id: 1 });
      assert.equal(store.getState()[0].ticking, false);
    });
  });
  describe('startTicking():', function() {
    it('store.getState()[0].ticking should return true after action: startTicking() is dispatched.', function() {
      store.dispatch(actionCreators.startTicking(1));
      assert.equal(store.getState()[0].ticking, true);
      clearInterval(window.myInt);
    });
  });
});
}
//I think i need to pass in the clear interval component
