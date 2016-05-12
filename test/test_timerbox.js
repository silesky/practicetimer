import ReactTestUtils from 'react-addons-test-utils';
import { assert } from 'Chai';
import jsdom from 'mocha-jsdom';
// turns your node.js environment into a moch browser environment supporting the full DOM and browser API.
// window, document, history will then be available to use



//  neccessary to stop jquery error //TypeError: $.extend is not a function



/*
var node = this.refs.button;
ReactTestUtils.Simulate.click(node)
*/
/*
renderIntoDocument
ReactComponent renderIntoDocument(

)
*/
module.exports = function() {

  describe(' * * * <TimerBox /> * * * ', () => {
    beforeEach(() => {
    });
    it('<TimerBox /> should load correctly.', () => {
      var timerbox = require('../app/containers/TimerBox');
      assert(timerbox);
    })
  })
};
