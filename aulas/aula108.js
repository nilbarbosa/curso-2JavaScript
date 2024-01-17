const config={
    cor:"#48f"
}

const cxmsg=new Cxmsg(config)

const btn_mostrarcxmsg=document.getElementById("btn_mostrarcxmsg")
const btn_mostrarcxmsg2=document.getElementById("btn_mostrarcxmsg2")
const btn_mostrarcxmsg3=document.getElementById("btn_mostrarcxmsg3")

btn_mostrarcxmsg.addEventListener("click",()=>{
    cxmsg.mostar("CFB Cursos","Curso JavaScript")
})
btn_mostrarcxmsg2.addEventListener("click",()=>{
    cxmsg.mostar("YouTube","Canal com cursos de Programação.")
})
btn_mostrarcxmsg3.addEventListener("click",()=>{
    cxmsg.mostar("JavaScript","Aula 108.")
})