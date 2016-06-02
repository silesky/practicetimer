/* eslint-disable no-undef */
import { expect } from 'chai';
import React from 'react';
import redux from 'redux';
import store from '../app/_Store.js';
// import reducer from '../app/reducers/_Reducer.js';
// import TestUtils from 'react-addons-test-utils';
import * as actionCreators from '../app/actions/_actionCreators';

/* 	_ http://chaijs.com/api/bdd/
 *
 *  expect(5).to.be.below(10); ... above
 *  expect(_nextTimer).to.be.ok; //truthy
 *  expect(_nextTimer).to.exist; // not null/ undefined
 */

module.exports = function() {
  describe('* * * reducer * * *', function() {
    describe('_setTickingTrue()...', function() {
      it('store.getState()[0].ticking should return true when action: SET_TICKING_TRUE is dispatched.', function() {
          store.dispatch(actionCreators._setTickingTrue(1));
          expect(store.getState()[0].ticking).to.be.true;
      });
    });
    describe('setTickingFalse()...', function() {
      it('store.getState()[0].ticking should return false after action: SET_TICKING_FALSE is dispatched.', function() {
        store.dispatch(actionCreators._setTickingTrue(1));
        store.dispatch(actionCreators.setTickingFalse(1));
        expect(store.getState()[0].ticking).to.be.false;
      })
    });
    describe('setTime()...', function() {
      it('should set current timer object\'s *time* property to 666...', function() {
        store.dispatch({ type: 'SET_TIME', time: 666, id: 1 });
        expect(store.getState()[0].time).to.equal(666);
      });
    });
    describe('addTimer()...', function() {
      it('it should add another timer object to the array..', function() {
        store.dispatch(actionCreators.addTimer());
				const _nextTimer = store.getState()[1];
        expect(_nextTimer).to.exist;
      });
    });
    describe('startTicking()...', function() {
       this.timeout(5000);
      beforeEach(function() {
        store.dispatch({ type: 'SET_TIME', time: 3, id: 1 });
        store.dispatch(actionCreators.startTicking(1));
      })
      afterEach(function() {
        clearInterval(window.myInt);
      });
      it('should set current timer object\'s *ticking* property to true', function() {
        expect(store.getState()[0].ticking).to.be.true;
      });
      it('should decrement current timer object\'s *time* property every second', function(done) {
        // timer property has been set to 3. waits two seconds, then checks if time has gone down at all.
          const _checkIfTimeIsBelow3 = () => {
            expect(store.getState()[0].time).to.be.below(3);
            done();
          }
          setTimeout(_checkIfTimeIsBelow3, 2000);
      });
    });
  });
};
