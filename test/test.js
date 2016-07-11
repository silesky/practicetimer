/* eslint-disable */
import { assert } from 'chai';

import test_mocha from './test_mocha'
import test_domino from './test_domino';
import test_timerbox from './test_timerbox';
import test_actions from './test_actions';
test_mocha();
// render logic
test_timerbox();
// paused
test_actions();
// startTicking
test_domino();
