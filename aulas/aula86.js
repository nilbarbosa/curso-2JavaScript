let nome=new String("Nilcimar Barbosa")
console.log(nome)

console.log(nome.search(/nilcimar/i))
//muda o comportamento da função search, adicionado o parâmetro "i" que indica que a palavra a ser pesquisada explícita entre as barras, não ultiliza case sensitive.

console.log(nome.match(/i/g))
//procura por todos ons icones "o" presente na string

console.log(nome.match(/i/ig))
//podem ser conbinados para atingir o objetivo.

console.log(nome.replace(/barbosa/i,"Ferreira"))
//podem ser conbinados para atingir o objetivo.