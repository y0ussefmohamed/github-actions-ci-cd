import test from "node:test";
import assert from "node:assert";

test("test that always passes", () => {
  assert.strictEqual(1 + 1, 2);
});
