let nome=new String("Nilcimar")
let nome2=new String("Nilcimar")
let canal=new String("CFB cursos")

/* 
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

//nome=nome.concat(canal)
//com esse metodo o valor é atribuido.
console.log(nome)

console.log(nome.indexOf("i"))
//procura dentro da string pelo caractere ou sentença solicitada.

console.log(nome.lastIndexOf("i"))
//procura dentro da string pela posição do primeiro caractere ou sentença solicitada.
 */


//------------------------------//


/* console.log(nome===nome2) 
esse metodo para comparar strings funcina somente para variáveis.
*/

console.log(nome.localeCompare(nome2))
//quado o valor de valor retorna "1" significa que a string comparada retorna um valor maior, quando for "-1" é o contrário, retorno "0" significa que as strings são iguas.

console.log(nome.replace("i","y"))
//procura o PRIMEIRO caractere definido encontrado e substitui pelo segundo caractere.

console.log(nome.search("Nil"))
//permite pesquisar caracteres denro do arrey.

console.log(nome.slice(0,3))
//permite cortar e enviar somente a parte cortada. A parte cortada é definida de acordo com a posição do caractere no arrey.

console.log(nome.split("cimar"))
//recorta os caracteres definidos.



