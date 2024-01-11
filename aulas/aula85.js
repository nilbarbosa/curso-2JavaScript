let nome=new String("Nilcimar")

console.log(nome.startsWith("Nil"))
//verifica se a string começa com o valor determinado.

console.log(nome.endsWith("mar"))
//verifica se a string termina com o valor determinado.

console.log(nome.includes("ci"))
//verifica se em alguma parte da string ela possui o valor determinado.

console.log(nome.repeat(2))
//repete o valor da string (somente na chamada, não subsutitui o valor).

/* nome=nome.repeat(2)
//atribuindo nome ao nome que está sendo tratado, o nome original passa a obter o valor tratado. */

console.log(nome.charCodeAt(0))
console.log(nome.charCodeAt(1))
console.log(nome.charCodeAt(3))
console.log(nome.charCodeAt(4))
console.log(nome.charCodeAt(5))
console.log(nome.charCodeAt(6))
console.log(nome.charCodeAt(7))

console.log(String.fromCodePoint(109,97,114))
//retorna o caractere do valor.


