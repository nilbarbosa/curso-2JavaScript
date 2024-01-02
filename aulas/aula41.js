const p_arrey=document.querySelector("#arrey")
const btnReduzir = document.querySelector("#btnReduzir");
const resultado=document.querySelector("#resultado")

const elementos_arrey=[1,2,3,4,5]
let ant=[]
let atu=[]

p_arrey.innerHTML="["+elementos_arrey+"]"


btnReduzir.addEventListener("click",(evt)=>{
    resultado.innerHTML=elementos_arrey.reduce((anterior,atual,oisicao)=>{
        ant.push(anterior)
        atu.push(atual)
        return atual+anterior
    })
    resultado.innerHTML+="<br/>"+ant+"<br/>"+atu
})
