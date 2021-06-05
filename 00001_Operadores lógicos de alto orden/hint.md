Te recordamos las funciones `both`, `either` y `complement`:

```js
// Devuelve verdadero cuando ambas lo son (AND)
const puedeVotar = both(esMayorDe16, figuraEnPadron)

// Devuelve verdadero cuando alguna lo es (OR)
const esUnBuenPlato = either(tengoHambre, esRico)

// Devuelve verdadero cuando la original da falso (NOT)
const esImpar = complement(esPar)
```