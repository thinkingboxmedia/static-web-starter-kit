'use strict';

import test from 'tape';

import App from '../../../../app/src/display/App';

var app = new App();

test('timing test', function (t) {

  t.plan(2);

  t.equal(typeof Date.now, 'function');
  var start = 200;

  setTimeout(function () {
    t.equal(app.start - start, 100);
  }, 100);
});
