const caixa=document.querySelector("#caixa")

let mapa=new Map()
//permite a variavel "mapa" usar o Map.

mapa.set("curso","javaScript")
//recebe a chave primeiro, e o valor depois.
mapa.set(10,"cfb cursos")
//pode variar os tipos, tanto da chave quanto do valor.
mapa.set(1,100)
mapa.set("canal",100)

console.log(mapa)

if(mapa.has("sim")){
    caixa.innerHTML="a chave existe na coleção!"
}else{
    caixa.innerHTML="a chave não está na coleção!"
}
//caixa.innerHTML=mapa.get("curso")




