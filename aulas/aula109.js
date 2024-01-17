import {Cxmsg} from "./cxmsg.js"
const config={
    cor:"#48f"
}

Cxmsg.config(config)

const btn_mostrarcxmsg=document.getElementById("btn_mostrarcxmsg")
const btn_mostrarcxmsg2=document.getElementById("btn_mostrarcxmsg2")
const btn_mostrarcxmsg3=document.getElementById("btn_mostrarcxmsg3")

btn_mostrarcxmsg.addEventListener("click",()=>{
    Cxmsg.mostar("CFB Cursos","Curso JavaScript")
})
btn_mostrarcxmsg2.addEventListener("click",()=>{
    Cxmsg.mostar("YouTube","Canal com cursos de Programação.")
})
btn_mostrarcxmsg3.addEventListener("click",()=>{
    Cxmsg.mostar("JavaScript","Aula 108.")
})