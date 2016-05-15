import { assert } from 'Chai';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import store from '../app/_Store';
import { TimerBox } from '../app/containers/TimerBox';
// removeTimer, addTimer, setTickingTrue, setTickingFalse
import * as actions from '../app/actions/_actionCreators';


function setup() {
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(<TimerBox actions={ actions } />)
  let output = renderer.getRenderOutput()
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
       const { output } = setup();
       assert(output);
    })
  })
};

/* render output:
{

'$$typeof': Symbol(react.element),
  type: 'div',
  key: null,
  ref: null,
  props:
   { className: 'timerBox',
     children:
      { '$$typeof': Symbol(react.element),
        type: 'div',
        key: null,
        ref: null,
        props: [Object],
        _owner: null,
        _store: {} } },
  _owner: null,
  _store: {} }
*/
