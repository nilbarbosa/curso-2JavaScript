function soma(...valores) {
    let tam=valores.length
    let res=0
    for(let i=0;i<tam;i++) {
        res+=valores[i]
    }
    return res
}

console.log(soma(10, 5))

//parâmetro rest ultiliza "..." fazendo com que não seja definido a quantidade máxima de parâmetros a serem passados.