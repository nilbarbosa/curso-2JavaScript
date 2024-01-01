const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML","CSS","Java", "PHP","React","MySQL","ReactNativ"] //cria-se um arrey para dar valor aos futuros objetos.

cursos.map((el,chave)=>{ //é criado um map para percorrer por todos os valores.
    const novoElemento=document.createElement("div") //usa se o atributo "createElement" para criar um elemento e é passado o tipo de elemento a ser criado(nesse caso div).
    novoElemento.setAttribute("id","c"+chave) //cria um id para o novo elemento, com o nome "c" somado com o número coresrpondente ao elemento.
    novoElemento.setAttribute("class","curso c1") //criase uma classe para o novo elemento, chamado de "curso c1"
    novoElemento.innerHTML=el //cria-se um novo elemento para todos os valores colocados dentro do arrey.
    caixa1.appendChild(novoElemento) //adiciona um novo elemento como filho do elemento da classe "caixa 1"
})


caixa1.appendChild(novoElemento)