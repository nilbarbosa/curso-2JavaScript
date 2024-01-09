const btn_alert=document.getElementById("btn_alert")
const btn_confirm=document.getElementById("btn_confirm")
const btn_prompt=document.getElementById("btn_prompt")

btn_alert.addEventListener("click",(evt)=>{
    alert("teste de alerta!")
})
//bloco de alerta simples.

btn_confirm.addEventListener("click",(evt)=>{
    const ret=confirm("você está aprendendo muito?")
    if(ret){
        console.log("botão ok pressionado.")
    }else{
        console.log("botão cancelar pressionado.")
    }
})
//bloco de alerta que retorna um valor true(caso clique em "ok") ou false (caso clique em "cancel").

btn_prompt.addEventListener("click",(evt)=>{
    const nome=prompt("digite seu nome")
    console.log(nome)
})
//bloco de código que permite pegar um imput de texto.