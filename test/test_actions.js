/* global describe, it, expect */
import { expect } from 'chai';
import React from 'react';
import redux from 'redux';
import store from '../app/_Store.js';
// import reducer from '../app/reducers/_Reducer.js';
// import TestUtils from 'react-addons-test-utils';
import * as actionCreators from '../app/actions/_actionCreators';




module.exports = function() {
  describe('[ more actions ] ', function() {
    describe('_setTickingTrue()...', function() {
      it('store.getState()[0].ticking should return true when action: SET_TICKING_TRUE is dispatched.', function() {
          store.dispatch(actionCreators._setTickingTrue(1));
          expect(store.getState()[0].ticking).to.be.true;
      });
    });
    describe('_setTickingFalse()...', function() {
      it('store.getState()[0].ticking should return false after action: SET_TICKING_FALSE is dispatched.', function() {
        store.dispatch(actionCreators._setTickingTrue(1));
        store.dispatch(actionCreators._setTickingFalse(1));
        expect(store.getState()[0].ticking).to.be.false;
      });
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
    describe('pausePlay()', function() {
      it('all timers should start paused', function() {
      expect(store.getState()[0].pause).to.be.true;      
      });
      it('when timer is ticking, paused should be set to false', function() {
        store.dispatch(actionCreators.startTicking(1));
        expect(store.getState()[0].ticking).to.be.true;
        expect(store.getState()[0].pause).to.be.false;      
      });
       it('while timer is ticking and pauseplay is clicked: paused should be set to true ', function() {
         store.dispatch(actionCreators.pausePlay());
        expect(store.getState()[0].ticking).to.be.true;
        expect(store.getState()[0].pause).to.be.true;      
      });
    });
  });
};