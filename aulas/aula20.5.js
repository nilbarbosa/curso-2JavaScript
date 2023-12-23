
//(versão padrão de declaração de função anônima.)
//const soma=function (v1, v2) { return v1+v2} 

const soma=(v1, v2)=>v1+v2
console.log(soma(10, 5))

//em caso de apenas um parâmetro de entrada, não é necessário uso de return nem das chaves.

const soma2=(v1, v2)=> {
    let res=v1+v2
    return res
}
console.log(soma2(0, 5))

//caso seja uma função mais complexa, é necessário o uso.