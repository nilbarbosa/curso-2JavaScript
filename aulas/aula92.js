const carro=document.getElementById("carro")
const btn_rodar=document.getElementById("btn_rodar")
const btn_parar=document.getElementById("btn_parar")

const init=()=>{
    carro.style="position:relative;left:0px;width:100px;height:40px"
   tamCarro=parseInt(carro.style.width)
   taMax=window.innerWidth - tamCarro
}

let anima=null
let taMax=null
let tamCarro=null
let dir=0

const move=()=>{
        if(parseInt(carro.style.left) >= taMax){
            dir=-1
        }else if(parseInt(carro.style.left) <= 0){
            dir=1
        }
        carro.style.left=parseInt(carro.style.left) + (10*dir) +"px" 
        anima=setTimeout(move,20)
}

btn_parar.addEventListener("click",()=>{
    clearTimeout(anima)
  }) 

  btn_rodar.addEventListener("click",()=>{
    move()
  }) 

//window.onload=init
window.addEventListener("load",init())

window.addEventListener("resize",()=>{
    taMax=window.innerWidth - parseInt(carro.style.width)
})

window.addEventListener("keydown",(evt)=>{
    if(evt.code==="ArrowUp"){
        carro.style.width=parseInt(carro.style.width)+10+"px"
        carro.style.height=parseInt(carro.style.width)+10+"px"
    }
    if(evt.code==="ArrowDown"){
        carro.style.width=parseInt(carro.style.width)-10+"px"
        carro.style.height=parseInt(carro.style.width)-10+"px"
    }
    tamCarro=parseInt(carro.style.width)
    taMax=window.innerWidth - tamCarro
})

