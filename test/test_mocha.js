import { assert } from 'chai';
import React from 'react';
import redux from 'redux';

module.exports = function() {
  describe('[ mocha online ]', function() {
    describe('online', function () {
      it('should be online', function () {
        assert.equal(-1, [1,2,3].indexOf(5));
        assert.equal(-1, [1,2,3].indexOf(0));
      });
    });
  });
}
