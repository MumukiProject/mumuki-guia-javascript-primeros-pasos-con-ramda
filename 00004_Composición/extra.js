const triple = (x) => x * 3
const primeraLetra = (texto) => head(texto)
const esMayorA10 = (x) => x > 10

const losTriples = map(triple)
const lasIniciales = map(primeraLetra)
const mayoresA10 = filter(esMayorA10)