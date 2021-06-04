describe("triple", function() {
  it("de 2 es 6", function() {
    assert.equal(triple(2), 6)
  })
  it("de 3 es 9", function() {
    assert.equal(triple(3), 9)
  })
})

describe("primeraLetra", function() {
  it("de 'hola' es h", function() {
    assert.equal(primeraLetra('hola'), 'h')
  })
  it("de 'La Paz' es 'L'", function() {
    assert.equal(primeraLetra('La Paz'),  'L')
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