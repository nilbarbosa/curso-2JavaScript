/* let a,b,c,d 
let numeros=[10,20,30,40]
let[a,b,c,d]=numeros

/* [a,b,c,d]=["verde","amarelo","azul","branco"]
//dessa forma é possivel adicionar valores as variáveis dentro do Array.

console.log(a)
console.log(b)
console.log(c)
console.log(d)
 */

/* ({a,b,c,d}={a:"verde",b:"amarelo",c:"azul",d:"branco"})
//desestruturando com objetos.

console.log(a)
console.log(b)
console.log(c)
console.log(d) 

*/

//---------------------------------------//

/* let a,b,c,dentro

[a,b=0,c=0,d=0]=[10]
//definindo valor inicial.

console.log(a)
console.log(b)
console.log(c)
console.log(d) 
 */

//---------------------------------------//

/* let a=10;
let b=20;

[a,b]=[b,a]
//invertendo valores.

console.log(a)
console.log(b)
 */

//---------------------------------------//

let numeros=()=>{
    return [10,20,30,40]
}

let[a,b,c,d]=numeros()
//desestrutura o valor ds função números e coloca nas variáveis.

console.log(a)
console.log(b)
console.log(c)
console.log(d) 
