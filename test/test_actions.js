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