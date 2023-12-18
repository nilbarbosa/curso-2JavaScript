"use strict"

 var nome = "Nilcimar" //pode ser acessado de qualquer lugar do código.
if(true) {
    console.log("campo dentro do if: " + nome)
}

console.log("campo fora do if: " + nome)

//let nome2 = "Ferreira" ((caso estivesse aqui, poderia ser acessada, pois a variavel não está dentro de um campo especifico!).
if(true) {
    let nome2 = "Ferreira" //só permitirar o acesso dentro do campo if.
    console.log("campo dentro do if: " + nome2)
}

console.log("campo fora do if: " + nome2) //não está permitido acessar a variavel.


const nome = "Barbosa" //const definiu o valor fixo da variaável!
console.log(nome)
nome = "outro" //não permite a aribuição de outro valor a variável.
console.log(nome)