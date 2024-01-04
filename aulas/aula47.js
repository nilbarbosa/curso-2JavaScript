const caixa=document.querySelector("#caixa")

const curso="javaScript"
const canal="CFB cursos"
//const frase="este é o curso de: "+curso + " do " + canal+"."

const frase=`Este é o curso de ${curso} do canal ${canal}.`
//permite a digitalização do código com mais facilidade.

caixa.innerHTML=frase