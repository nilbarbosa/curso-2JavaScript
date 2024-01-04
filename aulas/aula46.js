const caixa=document.querySelector("#caixa")

let musicas=new Set(["musica1","musica boa","musica"])
//pode ser inicializada já com valores estabelecidos. 

musicas.add("musica muito legal")
musicas.add("musica1")
musicas.add("musica1")
musicas.add("musica10")


console.log(musicas)

musicas.forEach((el)=>{
    caixa.innerHTML+=el +"<br/>"
})