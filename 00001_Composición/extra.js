const divisiblePor = 
  (x) => compose(equals(0), modulo(__, x))
  
const divisiblePor4 = divisiblePor(4)
const divisiblePor100 = divisiblePor(100)
const divisiblePor400 = divisiblePor(400)