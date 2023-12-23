let f=function (...valores){
    let res=0
    for(v of valores) {
        res+=v
    }
   return res
}

console.log(f(10, 13, 60))
//essa função não recebe um nome, mas é atribuida a uma variável.
