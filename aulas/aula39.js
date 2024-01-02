const p_arrey=document.querySelector("#arrey")
const btnVerificar = document.querySelector("#btnVerificar");
const resultado=document.querySelector("#resultado")

const elementos_arrey=[71,75,19,18,27]
p_arrey.innerHTML="["+elementos_arrey+"]"


btnVerificar.addEventListener("click",(evt)=>{
    const retorno=elementos_arrey.every((e,i,a)=>{
        if(e<18) {
            resultado.innerHTML="Arrey não conforme na posição do "+i+"."
        }
        return e>=18
    })
    if(retorno) {
        resultado.innerHTML="OK."
    }

   /*  console.log(retorno) */
})
