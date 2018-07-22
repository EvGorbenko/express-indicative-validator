const assert = require('chai').assert;
const { validate } = require('../index.js');

const requestMockup = (req, res, next, rules) => validate(rules)(req, res, next);

class ResponseMockup {
  status(_status) {
    this._status = _status;
    return this;
  }
  send(_response) {
    this._response = _response;
    return this;
  }
  get response_status() {
    return this._status;
  }
  get response_body() {
    return this._response;
  }
}

const loginRequestValidation = {
  email: 'required|email',
  password: 'required'
};

describe('indicative validation', () => {
  it('should return error', (done) => {
    const wrongRequestBody = {
      emaila: 'test@example.com'
    };
    const responseMockup = new ResponseMockup()
    const newMockup = requestMockup({ body: wrongRequestBody }, responseMockup, () => {
      assert.fail('request must be failed', 'requested successfully continued');
      done();
    }, loginRequestValidation).then(result => {
      const { response_status, response_body } = result;
      assert.equal(400, response_status);
      assert.isArray(response_body);
      done();
    });
  });
  it('should continue to next middleware', (done) => {
    const rightRequestBody = {
      email: 'buyer@example.com',
      password: 'secret'
    };
    const responseMockup = new ResponseMockup();
    const newMockup = requestMockup({ body: rightRequestBody }, responseMockup, () => {
      done();
    }, loginRequestValidation).then(response => {
      if (response) {
        assert.fail('request must be go to next middleware', 'request send response to user');
      }
    });
  })
});
