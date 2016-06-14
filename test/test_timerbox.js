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

/*ReactWrapper {
  component:
   { getDOMNode:
      { [Function: bound ]
        __reactBoundContext: [Circular],
        __reactBoundMethod: [Function],
        __reactBoundArguments: null,
        bind: [Function] },
     setChildProps:
      { [Function: bound setChildProps]
        __reactBoundContext: [Circular],
        __reactBoundMethod: [Function: setChildProps],
        __reactBoundArguments: null,
        bind: [Function] },
     setChildContext:
      { [Function: bound setChildContext]
        __reactBoundContext: [Circular],
        __reactBoundMethod: [Function: setChildContext],
        __reactBoundArguments: null,
        bind: [Function] },
     getInstance:
      { [Function: bound getInstance]
        __reactBoundContext: [Circular],
        __reactBoundMethod: [Function: getInstance],
        __reactBoundArguments: null,
        bind: [Function] },
     getWrappedComponent:
      { [Function: bound getWrappedComponent]
        __reactBoundContext: [Circular],
        __reactBoundMethod: [Function: getWrappedComponent],
        __reactBoundArguments: null,
        bind: [Function] },
     props: { Component: [Object], props: [Object], context: null },
     context: {},
     refs: {},
     updater:
      { isMounted: [Function],
        enqueueCallback: [Function],
        enqueueCallbackInternal: [Function],
        enqueueForceUpdate: [Function],
        enqueueReplaceState: [Function],
        enqueueSetState: [Function],
        enqueueSetProps: [Function],
        enqueueSetPropsInternal: [Function],
        enqueueReplaceProps: [Function],
        enqueueReplacePropsInternal: [Function],
        enqueueElementInternal: [Function] },
     state: { mount: true, props: [Object], context: null },
     _reactInternalInstance:
      { _currentElement: [Object],
        _rootNodeID: '.1',
        _instance: [Circular],
        _pendingElement: null,
        _pendingStateQueue: null,
        _pendingReplaceState: false,
        _pendingForceUpdate: false,
        _renderedComponent: [Object],
        _context: [Object],
        _mountOrder: 3,
        _topLevelWrapper: [Object],
        _pendingCallbacks: null,
        _mountIndex: 0,
        _mountImage: null,
        _isOwnerNecessary: false,
        _warnedAboutRefsInRender: false } },
  root: [Circular],
  node:
   Provider {
     props: { store: [Object], children: [Object] },
     context: {},
     refs: {},
     updater:
      { isMounted: [Function],
        enqueueCallback: [Function],
        enqueueCallbackInternal: [Function],
        enqueueForceUpdate: [Function],
        enqueueReplaceState: [Function],
        enqueueSetState: [Function],
        enqueueSetProps: [Function],
        enqueueSetPropsInternal: [Function],
        enqueueReplaceProps: [Function],
        enqueueReplacePropsInternal: [Function],
        enqueueElementInternal: [Function] },
     store:
      { dispatch: [Function: dispatch],
        subscribe: [Function: subscribe],
        getState: [Function: getState],
        replaceReducer: [Function: replaceReducer] },
     _reactInternalInstance:
      { _currentElement: [Object],
        _rootNodeID: '.1',
        _instance: [Circular],
        _pendingElement: null,
        _pendingStateQueue: null,
        _pendingReplaceState: false,
        _pendingForceUpdate: false,
        _renderedComponent: [Object],
        _context: [Object],
        _mountOrder: 4,
        _topLevelWrapper: null,
        _pendingCallbacks: null,
        _mountIndex: 0,
        _mountImage: null,
        _isOwnerNecessary: false,
        _warnedAboutRefsInRender: false },
     state: null },
  nodes:
   [ Provider {
       props: [Object],
       context: {},
       refs: {},
       updater: [Object],
       store: [Object],
       _reactInternalInstance: [Object],
       state: null } ],
  length: 1,
  options: {},
  complexSelector:
   ComplexSelector {
     buildPredicate: [Function: buildInstPredicate],
     findWhereUnwrapped: [Function: findWhereUnwrapped],
     childrenOfNode: [Function: childrenOfInst] } }
    ✓ <TimerBox /> should mount. (48ms)


*/
