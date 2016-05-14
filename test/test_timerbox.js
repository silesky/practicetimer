import ReactTestUtils from 'react-addons-test-utils';
import { assert } from 'Chai';
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
