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
      const _setTime = (time, id) => store.dispatch({ type: 'SET_TIME', time, id});
      _setTime(666, 1);
        // store.dispatch({ type: 'SET_TIME', time: 666, id: 1 });
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
      // max time for test suite is 20 seconds.
      // Error: timeout of 2000ms exceeded. Ensure the done() callback is being called in this test.
      this.timeout(20000);
      beforeEach(function() {
        store.dispatch({ type: 'SET_TIME', time: 2, id: 1 });
        store.dispatch(actionCreators.startTicking(1));
      })
      afterEach(function() {
        // if clearInterval goes inside the it block, it will clear prematurly
        clearInterval(window.myInt);
      });
      it('should set current timer object\'s *ticking* property to true', function() {
        expect(store.getState()[0].ticking).to.be.true;
      });
      it('should decrement current timer object\'s *time* property every second', function(done) {
        // timer property has been set to 3. waits two seconds, then checks if time has gone down at all.
        const _checkIfTimeIsBelow3 = () => {
          let firstAndonlyTimer = store.getState()[0].time;
          expect(firstAndonlyTimer).to.be.below(2);

          done();
        }
        setTimeout(_checkIfTimeIsBelow3, 2000);
      });
    });
      describe('startTicking(): domino behavior', function() {
        // max time is 20 seconds. without this line, error.
        this.timeout(20000);


        it('after the first timer is done ticking, the second timer should start', function(done) {
          // create new timer (tid-2) and set it
          store.dispatch(actionCreators.addTimer()); store.dispatch({ type: 'SET_TIME', time: 2, id: 2});

          // first domino start
          store.dispatch(actionCreators.startTicking(1));

          //  after 6000ms from starting the first timer, check if second has started.
          let _checkIfTimeIsBelow2 = () => {
             let secondTimer = store.getState()[1].time;
             expect(secondTimer).to.be.below(2);

             done();
           }

           // total time should be 2 + 2 = 4. 6 seconds is plenty.
          setTimeout(_checkIfTimeIsBelow2, 6000);
        })
        it('after the second timer is done ticking, the third timer should start', function(done) {
          store.dispatch(actionCreators.addTimer());
          store.dispatch({ type: 'SET_TIME', time: 2, id: 3});
          let _checkIfTimeIsBelow2 = () => {
             let thirdTimer = store.getState()[2].time;
             expect(thirdTimer).to.be.below(2);

             done();
           }
          setTimeout(_checkIfTimeIsBelow2, 6000);

        })
      });
  });
};
