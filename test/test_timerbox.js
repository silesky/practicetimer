import { assert } from 'chai';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import store from '../app/_Store';
// only named export is imported, which means the plain component
import { TimerBox } from '../app/containers/TimerBox';
import { Provider } from 'react-redux';
// removeTimer, addTimer, _setTickingTrue, _setTickingFalse
import * as actions from '../app/actions/_actionCreators';
// neccessary for enzyme;
import jsdom from 'jsdom';
// airbnb's alternative to ReactTestUtils... cool thing is it's meant to play nice with jsdom
import { shallow, mount, render } from 'enzyme';

// setup for ReactTestUtils (enzyme's setup is here:  mocha --require ./test/setupJsdom.js
function setup(componentToTest) {
  // this is shallow rendering, so it only renders one level deep.
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(componentToTest);
  let output = renderer.getRenderOutput();
  return {
    output,
    renderer
  }
}

module.exports = function() {
  describe(' * * * <TimerBox /> * * * ', () => {

    it('<TimerBox /> should exist.', () => {
      assert(TimerBox);
    });
    it('<TimerBox /> should render.', () => {
      const { output } = setup(<TimerBox actions={ actions } />);
    }),
    it('<TimerBox /> should mount.', () => {
      const wrapper = mount(
            <Provider store={store}>
              <TimerBox actions={ actions } />
        </Provider>
  );
      assert(wrapper);
    })
  })
};

