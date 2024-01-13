/* let numeros=[10,20,30,40,50,60,70,80,90]

let [a,b,c,...d]=numeros
//com isso todo o resto é atribudo a variável d.

console.log(a)
console.log(b)
console.log(c)
console.log(d) */

//-----------------------------//
/* 
let obj={nome:"Nilcimar",sobreNome:"Barbosa"}

let {nome,sobreNome}=obj
console.log(nome)
console.log(sobreNome) */

//-----------------------------//

/* const cores=()=>{
    return ["verde","amarelo","azul","branco"]
}
let [c1,c2,,c3]=cores()
//jogando um dos valores para lugar nenhum, automaticamente c3 recebe o próximo valor.
console.log(c1)
console.log(c2)
console.log(c3) */

//-----------------------------//

let txt="teste teste"
let [t]=txt.split(" ")
console.log(t)

