const valores=[10,9,2]
const it_valores=valores[Symbol.iterator]()

const texto="youtube"
const it_texto=texto[Symbol.iterator]()

console.log(texto)
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())