const timer=document.getElementById("timer")

const tmpIni=Date.now()

const contador=()=>{
    const tmpAtual=Date.now()
    let cont=tmpAtual-tmpIni
    let seg=((tmpAtual-tmpIni)/1000)
    timer.innerHTML=converter(seg)
}

const converter=(seg)=>{
    const hora=Math.floor(seg/3600)
    const resto=seg%3600
    const minuto=Math.floor(resto/60)
    const segundo=Math.floor(resto%60)
    const form=(hora<10?"0"+hora:hora)+":"+(minuto<10?"0"+minuto:minuto)+":"+(segundo<10?"0"+segundo:segundo)

    return form
}
setInterval(contador,1000)