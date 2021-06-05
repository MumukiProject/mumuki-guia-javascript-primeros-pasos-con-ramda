describe("triplesMayoresA10", function() {
  it("calcula los triples y luego filtra", function() {
    assert.deepEqual(
      triplesMayoresA10([3, 6, 9]), 
      [18, 27]
    )
  })
})

describe("triplesDeLosMayores", function() {
  it("filtra y luego calcula los triples", function() {
    assert.deepEqual(
      triplesDeLosMayores([8, 9, 10, 11]), 
      [33]
    )
  })
})