import { assert } from 'Chai';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import * as actions from '../app/actions/_actionCreators';

import { TimerBox as PlainTimerBox } from '../app/containers/TimerBox';

const { removeTimer } = actions;

// importing the named TimerBox component, rather than the default store. Otherwise, we would need to create a mock store and a provider.




module.exports = function() {
  describe(' * * * <TimerBox /> * * * ', () => {
    it('<PlainTimerBox /> should exist.', () => {
      assert(PlainTimerBox);
    });
    it('<PlainTimerBox /> should render.', () => {
      let renderer = ReactTestUtils.createRenderer();
      renderer.render(<PlainTimerBox { ...actions } />);
      let output = render.getRenderOutput();

    })
  })
};
