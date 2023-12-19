let idade = 18
let mensagem = idade

if (mensagem < 18) {
    console.log("Menor de Idade.")
} else{
    console.log("Maior de Idade")
}

//simplificando usando operador ternário:

let idade2 = 13
let mensagem2 = (idade2 < 18)?"Menor de Idade" : "Maior de Idade";
console.log(mensagem2)