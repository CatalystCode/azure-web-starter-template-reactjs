// __tests__/services-test.js
let chai = require('chai');
import {SERVICES} from '../../src/services/services';
let expect = chai.expect;
let assert = chai.assert;
let sinon = require('sinon');

describe('Testing all core service functionality', () => {
  describe('Service Tests',() => {
    let server = null, spy = null, fakingIt = "['put some real mock data here']";

    beforeEach(function () {
         spy = sinon.spy($, "get");
         server = sinon.fakeServer.create();
    });

    afterEach(function () {
        $.get.restore(); // Unwraps the spy
        server.restore();
    });

    it('Verify your service call responses are being returned', (done) => {
      var callback = sinon.stub();

      SERVICES.sampleRestCall(callback);

      server.respond(fakingIt);
      assert.ok(spy.calledOnce);
      let response = spy.getCall(0).returnValue.responseText;
      assert.ok(response === fakingIt);
      var obj = response.substring(0, response.length - 1);
      console.log(obj);
      assert.equal("{0}/test".format(SERVICES.host), spy.getCall(0).args[0]);
      done();
    })
  })
})
