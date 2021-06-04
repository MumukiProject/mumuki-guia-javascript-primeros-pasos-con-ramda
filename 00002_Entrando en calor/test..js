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

describe("esMayorA10", function() {
  it("12 sí lo es", function() {
    assert(esMayorA10(12))
  })
  it("8 no lo es", function() {
    assert(!esMayorA10(8))
  })
})