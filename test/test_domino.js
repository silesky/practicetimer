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
  describe('[ domino behavior - slow tests ]', function() {
    describe('startTicking()...', function() {
      // max time for test suite is 20 seconds.
      // Error: timeout of 2000ms exceeded. Ensure the done() callback is being called in this test.
      this.timeout(20000);
      beforeEach(function() {
        store.dispatch({ type: 'SET_TIME', time: 2, id: 1 });
        store.dispatch(actionCreators.startTicking(1));
      });
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
        };
        setTimeout(_checkIfTimeIsBelow3, 2000);
      });
    });
      describe('startTicking(): domino behavior', function() {
        // max time is 20 seconds. without this line, error.
        this.timeout(20000);
        // this stuff happens 1st
        store.dispatch(actionCreators.addTimer()); 
        store.dispatch(actionCreators.addTimer()); 
        store.dispatch({ type: 'SET_TIME', time: 2, id: 2});
        store.dispatch({ type: 'SET_TIME', time: 2, id: 3});
        let firstStartTime = store.getState()[0].startTime;
        let secondStartTime = store.getState()[1].startTime;
        // this happens next
        before(function() {
      
          store.dispatch(actionCreators.startTicking(1));
        });


        it('after the first timer is done ticking, the second timer should start', function(done) {
          // create new timer (tid-2) and set it
        

          // first domino start
        

          //  after 6000ms from starting the first timer, check if second has started.
          let _checkIfTimeIsBelow2 = () => {
             let secondTimer = store.getState()[1].time;
             expect(secondTimer).to.be.below(2);
             done();
           };

           // total time should be 2 + 2 = 4. 6 seconds is plenty.
          setTimeout(_checkIfTimeIsBelow2, 3000);
        });
        it('after the second timer is done ticking, the third timer should start', function(done) {
          store.dispatch(actionCreators.addTimer());
   
          let _checkIfTimeIsBelow2 = () => {
             let thirdTimer = store.getState()[2].time;
             expect(thirdTimer).to.be.below(2);

             done();
           };
          setTimeout(_checkIfTimeIsBelow2, 3000);

        });
          it('when cycle is done, reset_all should reset the times, even if the time is manually set', function() {
            store.dispatch(actionCreators.resetAll());
            expect(store.getState()[0].time).to.equal(firstStartTime);
        });
      });
  });
};
