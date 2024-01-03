const caixa=document.querySelector("#caixa")

let cores=["azul ","verde ","vermelho "]
let cursos=["HTML","CSS","javaScript",cores] //evento de matrizes, arrei dentro de um arey

//cursos[0]="c++" alterando o valor do elemento.

cursos.push("c++") //adicionando novo valor (no final)
cursos.unshift("mySQL") //adiciona no inicio
cursos.shift() //remove o primeiro item do arrey
cursos.pop() //remove o ultimo item do arrey

console.log(cursos[3][1])

cursos.map((el)=> {
    let p=document.createElement("p")
    p.innerHTML=el
    caixa.appendChild(p)
})
