describe("esBisiesto", function() {
  it("año divisible por 400", function() {
    assert(esBisiesto(2000))
  })

  it("año divisible por 4 y no por 100", function() {
    assert(esBisiesto(1996))
  })

  it("año divisible por 4 y también por 100", function() {
    assert(!esBisiesto(1900))
  })
})