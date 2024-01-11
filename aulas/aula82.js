let nome=new String("Nilcimar")
let canal=new String("CFB cursos")
console.log(nome)
console.log(typeof(nome))

console.log(nome.charAt(0))
//retorna o caractere do index índicado.

console.log(nome.charCodeAt(0))
//retorna o códiogo do caractere índicado.

console.log(nome.concat(canal))
//serve para concatenar strings.
console.log(nome)
//a contatenação só é feita no momento da chamada do método. O valor contatenado não é atribuido permanentemente ao valor dá string.

/* nome=nome.concat(canal)
//com esse metodo o valor é atribuido.
console.log(nome) */

console.log(nome.indexOf("i"))
//procura dentro da string pelo caractere ou sentença solicitada.

console.log(nome.lastIndexOf("i"))
//procura dentro da string pela posição do primeiro caractere ou sentença solicitada.

