const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_c2=document.querySelector("#c1_c2")
const cursos=["HTML","CSS","JavaScript","PHP","React","MySQL","ReactNative"]
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")
const btnRemoverNovoCurso=document.getElementById("btnRemoverNovoCurso")
const btnAdicionarNovoCursoAntes=document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois=document.getElementById("btnAdicionarNovoCursoDepois")
const NomeCurso=document.getElementById("NomeCurso")


let indice=0

const tirarSelecao=()=>{
    const CursoSelecionados=[...document.querySelectorAll(".selecionado")]
    CursoSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso=(curso)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+indice)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=curso
    novoElemento.addEventListener("click",(evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })
    return novoElemento
}
cursos.map((el,chave)=>{
    
    const novoElemento=criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const cursoSelecionado=()=>{
    const CursoSelecionados=[...document.querySelectorAll(".selecionado")]
    return CursoSelecionados[0]
}

btnCursoSelecionado.addEventListener("click",(evt)=>{
   try{
    alert("curso selecionado " + cursoSelecionado().innerHTML)
   } catch(ex) {
    alert("selecione um curso")
   }
})

btnRemoverNovoCurso.addEventListener("click",(evt)=>{
    const cs=cursoSelecionado()
    if(cs!=undefined){
    cs.remove()
    } else{
        alert("selecione um curso")
    }
})

btnAdicionarNovoCursoAntes.addEventListener("click",()=>{
    try {
        if(NomeCurso.value!=""){
            const novoCurso=criarNovoCurso(NomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado())
        }else{
            alert("digite o nome curso")
        }
    }catch(ex){
        alert("selecione um curso")
    }
    
})

btnAdicionarNovoCursoDepois.addEventListener("click",()=>{
    try {
        if(NomeCurso.value!=""){
            const novoCurso=criarNovoCurso(NomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado().nextSibling)
        }else{
            alert("digite o nome curso")
        }
    }catch(ex){
        alert("selecione um curso")
    }
})
