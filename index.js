var assert = require('assert');

function square(a) {
    return a * a;
}

assert.equal(square(4), 16); // this simple test should pass when run with Travis
