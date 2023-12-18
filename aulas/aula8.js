let n1=10 // 1001
let n2=11 // 1010


// & verifica se há equivalência, se possui dois núeros 1.
let res = n1 & n2 
console.log(res) //deve retornar 10

// | sempre que ouver 1, independênte se há equivalência ou não, deve retornar 1.
let res2 = n1 | n2 
console.log(res2) //deve retornar 11

// ^ retornará 1 somente onde NÂO ouver equivalência.
let res3 = n1 ^ n2 
console.log(res3) //deve retornar 1

// << desloca 1 bit para esquerda (ele mata um zero do inicio, desloca o bit para a esquerda azendo com que ficque uma casa vazia na direita que logo é preenchida com 0) ex:

//00001001 
//00010010 (deslocado esquerda)

//o resultado (no caso de 1), é o dobro do valor inicial)

let res4 = n1 << 1
console.log(res4) //vale 20, pois dobrou o valor!

// >> desloca 1 bit para direita (faz exatamente o contrario do anterior) ex:

//00001001 
//00000100 (deslocado direita)

//o resultado (no caso de 1), é a metade do valor inicial)

let res5 = n1 >> 1
console.log(res5) //vale 5, pois pego metade do valor!

