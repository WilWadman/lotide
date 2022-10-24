// Test Code
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns labs for 'lighthouse labs'", () => {
    assert.deepEqual(tail(['Lighthouse', 'Labs']), ['Labs']);
  });
  it("returns 'Yes' for 'Yes'", () => {
    assert.strictEqual(tail("Yes"), "es")
  });
});

/* assertEqual(1, 1);
assertEqual(2, 3);
assertEqual("Yes", "Yes"); */