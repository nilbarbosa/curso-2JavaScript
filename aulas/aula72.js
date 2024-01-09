const objetos=document.getElementById("objetos")

let computador ={
    cpu:"i9",
    ram:"64g",
    hd:"2TB",
    info:function(){
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD: ${this.hd}`)
    }
}
computador["monitor"]="22pol"
computador.placaVideo="rtx"


console.log(computador)

const computadores=[
    { 
        cpu:"i9",
        ram:"64g",
        hd:"2TB"
    },
    { 
        cpu:"i5",
        ram:"32g",
        hd:"2TB"
    },
    { 
        cpu:"i7",
        ram:"64g",
        hd:"1TB"
    },
]

computadores.forEach((c)=>{
    console.log(c)
    const div=document.createElement("div")
    div.innerHTML=c.cpu+"<br/>"+c.ram+"<br/>"+c.hd
    div.setAttribute("class","computador")
    objetos.appendChild(div)
})


/* computador.info()
//objetos.innerHTML=computador.cpu + " - " + computador.hd + " - " + computador.ram //primeira opção de como imprimir os metodos determinados.
objetos.innerHTML=JSON.stringify(computadores)
//passará direto os metodos e seus valores.
 */
