/* eslint-disable */
import { assert } from 'Chai';
import React from 'react';
import redux from 'redux';
import store from '../app/_store.js';
import reducer from '../app/reducers/_Reducer.js';
// import * as support from 'support';
// import API from 'api-vbb'

describe('MY MOCHA TEST', function() {
  describe('indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

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
describe('REDUCER->TEST TIMER CHANGE GROUP:', function() {
    it('store.getState()[0].time should increment after action: INCREMENT is dispatched...', function() {
        let time = store.getState()[0].time;
        store.dispatch({ type: 'INCREMENT', id: 1});
        assert.equal(store.getState()[0].time,  time + 1);
    });
});
});
