const caixa=document.querySelector("#caixa")

let mapa=new Map()

mapa.set("curso","javaScript")
mapa.set(10,"cfb cursos")
mapa.set(1,100)
mapa.set("canal",100)

console.log(mapa)

if(mapa.has("sim")){
    caixa.innerHTML="a chave existe na coleção!"
}else{
    caixa.innerHTML="a chave não está na coleção!"
}
//caixa.innerHTML=mapa.get("curso")




