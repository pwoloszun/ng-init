'use strict';

describe('myApp.version module', function () {
  beforeEach(module('myApp.version'));

  describe('version service', function () {
    it('should return current version', inject(function (version) {
      var expectedVersion = "0.2.0";

      expect(version).toEqual(expectedVersion);
    }));
  });
});
