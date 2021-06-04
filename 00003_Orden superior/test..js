describe("losTriples", function() {
  it("de [1, 2, 3] es [3, 6, 9]", function() {
    assert.equal(losTriples([1, 2, 3]), [3, 6, 9])
  })
})

describe("lasIniciales", function() {
  it("de ['Andrea', 'Joaquín', 'Elmer'] son ['A', 'J', 'E']", function() {
    assert.equal(lasIniciales(['Andrea', 'Joaquín', 'Elmer']), ['A', 'J', 'E'])
  })
})

describe("mayoresA10", function() {
  it("12 sí lo es", function() {
    assert(esMayorA10(12))
  })
  it("8 no lo es", function() {
    assert(!esMayorA10(8))
  })
})