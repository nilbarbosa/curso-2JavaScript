//const c1=document.getElementById("c1")
const cursos=[...document.querySelectorAll(".curso")]

function msg(){
    alert('clicou')
}

cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el=evt.target
        el.classList.add("destaque")
        console.log(el.innerHTML + " foi clicado")
    })
})

/*  c1.addEventListener("click",msg) //é definido qual o evento, e é passado a função já estabelecida anteriormente chamada de "msg". 

c1.addEventListener("click",()=>{
    alert('clicou2')
}) //usa-see uma arrow function e inplementado a funçao diretamente.


c1.addEventListener("click",()=>{
   msg()
}) //chamado a função pré estabelecida.

c1.addEventListener("click",(evt)=>{
    console.log(evt)
 }) 

 c1.addEventListener("click",(evt)=>{
    const el=evt.target
    el.classList.add("destaque")
 }) //adicionando a teg css de "destaque" qundo for clicado.
 */