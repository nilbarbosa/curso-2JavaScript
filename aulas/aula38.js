const p_arrey=document.querySelector("#arrey")
const txt_pesquisar = document.querySelector("#txt_pesquisar");
const btnPesquisar=document.querySelector("#btnPesquisar")
const resultado=document.querySelector("#resultado")

const elementos_arrey=["HTML","CSS","JavaScript"]
p_arrey.innerHTML="["+elementos_arrey+"]"


btnPesquisar.addEventListener("click",(evt)=>{
    resultado.innerHTML="valor não encontrado."
    const ret=elementos_arrey.find((e,i)=>{
        if(e.toLocaleUpperCase()==txt_pesquisar.value.toLocaleUpperCase()){
            resultado.innerHTML="valor encontrado: "+e + " na posição: "+i
            return e
        }
    })
    console.log(ret)
})
