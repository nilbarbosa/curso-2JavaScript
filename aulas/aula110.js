import {Cxmsg} from "./cxmsg.js"
const config={
    cor:"#48f",
    tipo:"sn", //tipos: ok, sn
    textos:["SIM","NÃO"],
    comando_sn:()=>{}
}

const fsim=()=>{
    console.log("botão sim prescionado")
}

const btn_mostrarcxmsg=document.getElementById("btn_mostrarcxmsg")
const btn_mostrarcxmsg2=document.getElementById("btn_mostrarcxmsg2")
const btn_mostrarcxmsg3=document.getElementById("btn_mostrarcxmsg3")

btn_mostrarcxmsg.addEventListener("click",()=>{
    config.tipo="ok"
    Cxmsg.mostar(config,"CFB Cursos","Curso JavaScript")
})

btn_mostrarcxmsg2.addEventListener("click",()=>{
    config.tipo="sn"
    config.textos=["SIM","NÃO"]
    config.comando_sn=()=>(fsim())
    Cxmsg.mostar(config,"YouTube","Canal com cursos de Programação.")
})

btn_mostrarcxmsg3.addEventListener("click",()=>{
    config.tipo="sn"
    config.textos=["OK","CANCELAR"]
    Cxmsg.mostar(config,"JavaScript","Aula 108.")
})