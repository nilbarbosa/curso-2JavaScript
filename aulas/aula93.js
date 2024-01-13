const q1=document.getElementById("q1")
const q2=document.getElementById("q2")
const posx=document.getElementById("posx")
const posy=document.getElementById("posy")
const largura=document.getElementById("largura")
const altura=document.getElementById("altura")

let DOMRect_q1=q1.getBoundingClientRect()

const info=(el)=>{
    let DOMRect_q=el.getBoundingClientRect()
    posx.innerHTML=`posx:${DOMRect_q.x}`
    posy.innerHTML=`posy:${DOMRect_q.y}`
    altura.innerHTML=`largura:${DOMRect_q.width}`
    largura.innerHTML=`altura:${DOMRect_q.height}`
}

q1.addEventListener("click",(evt)=>{
    info(evt.target)
})
q2.addEventListener("click",(evt)=>{
    info(evt.target)
})