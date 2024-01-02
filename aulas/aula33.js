//valor recebe o "valor" que está sendo iterado, "indice" recebe a posição desse valor dentro do arrey, e "arr" recebe o arey completo. 

const filtroMaior18=(valor,indice,arr)=>{ 
    if (valor >= 18) {
        return valor
    }
}

const idades=[15,21,30,17,18,44,12,50]
const maior=idades.filter((valor,indice,arr)=> {
    if (valor >= 18) {
        return valor
    }
})

const menor=idades.filter((valor,indice,arr)=> {
    if (valor < 18) {
        return valor
    }
})

console.log(idades)
console.log(maior)
console.log(menor)