import {Cxmsg} from "./cxmsg.js"
 const config={
    cor:"#48f"
}
const cxmsg=new Cxmsg(config) 

const btn_mostrarcxmsg=document.getElementById("btn_mostrarcxmsg")
const btn_mostrarcxmsg2=document.getElementById("btn_mostrarcxmsg2")
const btn_mostrarcxmsg3=document.getElementById("btn_mostrarcxmsg3")

btn_mostrarcxmsg.addEventListener("click",()=>{
    Cxmsg.mostrar("CFB Cursos","Curso de JavaScript")
})

btn_mostrarcxmsg2.addEventListener("click",()=>{
    Cxmsg.mostrar("YouTube","Canal com cursos de programação")
})

btn_mostrarcxmsg3.addEventListener("click",()=>{
    Cxmsg.mostrar("JAvaScript","aula 136")
})