function nome(n1) {
    console.log(n1)
}

nome("Bruno")

//no exemplo acima é definido um parâmetro "n1" para a função. A função tem a ação de inprimir o valor de "n1". Ao chamar a função, é passado um valor para o parâmetro ("Bruno").

function soma(n1,n2) {
    console.log(n1+n2)
}

soma(10, 15)

//no exemplo acima é definido um parâmetro "n1" e "n2" para a função. A função tem a ação de inprimir a soma de "n1" com "n2". Ao chamar a função, é passado um valor para os parâmetros.

function soma(n1=0,n2=0) {  //pode ser passado valores padões para os parâmetros.
    console.log(n1+n2)
}

soma(10);

//----------------------------------------------------//


let number =10
function add(n) {
    return number+n
}

console.log(add(12))

//no exemplo acima é criada uma variável "number" e é criado a função "add" que soma o valor da variável "number" com o valor que deve ser passado como parâmetro na função.