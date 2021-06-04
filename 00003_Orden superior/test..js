describe("losTriples", function() {
  it("de [1, 2, 3] es [3, 6, 9]", function() {
    assert.deepEqual(losTriples([1, 2, 3]), [3, 6, 9])
  })
})

describe("lasIniciales", function() {
  it("de ['Andrea', 'Joaquín', 'Elmer'] son ['A', 'J', 'E']", function() {
    assert.deepEqual(lasIniciales(['Andrea', 'Joaquín', 'Elmer']), ['A', 'J', 'E'])
  })
})

describe("mayoresA10", function() {
  it("quita los elementos menores", function() {
    assert.deepEqual(mayoresA10([1, 12, 5, 22]), [12, 22])
  })
})