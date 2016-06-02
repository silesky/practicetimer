import { assert } from 'chai';
import React from 'react';
import redux from 'redux';
import store from '../app/_Store.js';
import reducer from '../app/reducers/_Reducer.js';
import TestUtils from 'react-addons-test-utils';
import * as actionCreators from '../app/actions/_actionCreators';
//http://chaijs.com/api/assert/
module.exports = function() {

  describe('* * * reducer * * *', function() {
    describe('setTickingTrue()...', function() {
      it('store.getState()[0].ticking should return true when action: SET_TICKING_TRUE is dispatched.', function() {
        store.dispatch({ type: 'SET_TICKING_TRUE', id: 1 })
        assert.equal(store.getState()[0].ticking, true);
      });
    });
    describe('setTickingFalse()...', function() {
      it('store.getState()[0].ticking should return false after action: SET_TICKING_FALSE is dispatched.', function() {
        store.dispatch({ type: 'SET_TICKING_TRUE', id: 1 })
        store.dispatch({ type: 'SET_TICKING_FALSE', id: 1 });
        assert.equal(store.getState()[0].ticking, false);
      })
    });
    describe('setTime()...', function() {
      it('should set current timer object\'s *time* property to 666...', function() {
        store.dispatch({ type: 'SET_TIME', time: 666, id: 1 })
        assert.equal(store.getState()[0].time, 666);
      });
    });
    describe('startTicking()...', function() {
       this.timeout(5000);
      beforeEach(function() {
        store.dispatch({ type: 'SET_TIME', time: 3, id: 1 })
        store.dispatch(actionCreators.startTicking(1));
      })
      afterEach(function() {
        clearInterval(window.myInt);
      })
      it('should set current timer object\'s *ticking* property to true', function() {
        assert.equal(store.getState()[0].ticking, true);
      });
      it('should decrement current timer object\'s *time* property every second', function(done) {
          const myAssertion = () => {
            assert.isBelow(store.getState()[0].time, 3);
            done();
          }
          setTimeout(myAssertion, 2000);
      });
    });
  });
}
