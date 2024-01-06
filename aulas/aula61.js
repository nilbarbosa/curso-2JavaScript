const teclasNum=[...document.querySelectorAll(".num")]
const teclasOp=[...document.querySelectorAll(".op")]
const teclasRes=document.querySelector(".res")
const display=document.querySelector(".display")
const teclaOn=document.getElementById("tOn")
const teclaLimpar=document.getElementById("tLimpar")
const teclaIgual=document.getElementById("tIgal")
const tCpy=document.getElementById("tCpy")
const teste=document.getElementById("teste")
const calc_aba=document.getElementById("calc_aba")
const calc=document.getElementById("calc")
const img_aba_calc=document.getElementById("img_aba_calc")



let sinal=false
let decimal=false

teclasNum.map((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal=false
        if(evt.target.innerHTML==","){
            if(!decimal){
            decimal=true
            if(display.innerHTML=="0"){
                display.innerHTML="0,"
            } else{
                display.innerHTML+=evt.target.innerHTML
            }
            }
        } else{
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            display.innerHTML+=evt.target.innerHTML
        }
    })
})
teclasOp.map((el)=>{
    el.addEventListener("click",(evt)=>{
        if(!sinal){
            sinal=true
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            if(evt.target.innerHTML=="x"){
                display.innerHTML+="*"
            } else{
                display.innerHTML+=evt.target.innerHTML
            }
        }
    })
})

teclaLimpar.addEventListener("click",()=>{
    sinal=true
    decimal=false
    display.innerHTML=0
})

teclaIgual.addEventListener("click",()=>{
    sinal=false
    decimal=false
    const res=eval(display.innerHTML)
    display.innerHTML=res
})

tCpy.addEventListener("click",()=>{
    navigator.clipboard.writeText(display.innerHTML)
    /* teste.select()
    teste.setSelectionRange(0,9999999999) //mobile
    navigator.clipboard.writeText(teste.value) */
})

calc_aba.addEventListener("click",()=>{
   calc.classList.toggle("calc_exibir")
   if(calc.classList.contains("calc_exibir")){
    img_aba_calc.setAttribute("src","arrow_left.svg")
   } else{
    img_aba_calc.setAttribute("src","arrow_right.svg")
   }
})