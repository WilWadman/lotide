
const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns 'Lighthouse' for 'Lighthouse Labs'", ()=>{
    assert.strictEqual(head(["Lighthouse", "Labs"]), "Lighthouse");
  });
  it("returns  1 for 1 ", () => {
    assert.strictEqual(head('1'), '1');
  });
  it("returns '5' got [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  })
});




/* assertEqual("Yes", "Yes");
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse"); */