describe("doble", function() {
  it("de 2 es 4", function() {
    assert.equal(doble(2), 4)
  })
  it("de 3 es 6", function() {
    assert.equal(doble(3), 6)
  })
})

describe("triple", function() {
  it("de 2 es 6", function() {
    assert.equal(triple(2), 6)
  })
  it("de 3 es 9", function() {
    assert.equal(triple(3), 9)
  })
})

describe("anterior", function() {
  it("de 2 es 1", function() {
    assert.equal(anterior(2), 1)
  })
  it("de 3 es 2", function() {
    assert.equal(anterior(3), 2)
  })
})