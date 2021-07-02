const assert = require("assert");
const myModule = require("../public/index.js");
assert.strictEqual(myModule.add(1, 2), 3);
assert.strictEqual(myModule.subtract(10, 5), 5);
assert.strictEqual(myModule.multiply(5, 2), 10);
console.log("ok");
