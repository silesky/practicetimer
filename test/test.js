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

describe('REDUCER->TICKING TEST GROUP:', function() {
  describe('store.dispatch: SET_TICKING_TRUE', function() {
    it('store.getState()[0].ticking should return true when action: SET_TICKING_TRUE is dispatched...', function() {
      store.dispatch({ type: 'SET_TICKING_TRUE', id: 1 })
      assert.equal(store.getState()[0].ticking, true);
    });
  });
  describe('store.dispatch: SET_TICKING_FALSE', function() {
    it('store.getState()[0].ticking should return false after action: SET_TICKING_FALSE is dispatched...', function() {
      store.dispatch({ type: 'SET_TICKING_FALSE', id: 1 });
      assert.equal(store.getState()[0].ticking, false);
    });
  });

});
