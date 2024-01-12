let nome=new String("Nilcimar Barbosa Ferreira")
let email="nilcimarteste123@gmail.com"
let numeros="10,100,1000"

/* console.log(nome)

console.log(nome.search(/nilcimar/i))
//muda o comportamento da função search, adicionado o parâmetro "i" que indica que a palavra a ser pesquisada explícita entre as barras, não ultiliza case sensitive.

console.log(nome.match(/i/g))
//procura por todos ons icones "o" presente na string

console.log(nome.match(/i/ig))
//podem ser conbinados para atingir o objetivo.

console.log(nome.replace(/barbosa/i,"Ferreira"))
//podem ser conbinados para atingir o objetivo.
 */
//-------------------------------------//

console.log(nome.match(/[c-r|1-6]/ig))
//pode-se procurar números, strings, e outros caracteres, a "|" é ultilizada para executar duas ações.


//meta caracteres
console.log(nome.match(/\d/ig))
//retorna todos os números.
console.log(nome.match(/\s/ig))
//retorna todos os espaçoes.
console.log(nome.match(/\hp/ig))
//retorna todos os números.

//quantificadores
console.log(nome.match(/a+/ig))
//indica que esta sendo solicitado todos os "i".

console.log(numeros)

console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))