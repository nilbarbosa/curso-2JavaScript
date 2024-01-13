const f_nome=document.querySelector("#f_nome")
const f_nota=document.querySelector("#f_nota")
const f_msg=document.querySelector("#f_msg") 

document.querySelector("#btn_validar").addEventListener("click", (evt) => {

    let estadoValidacao=f_nota.validity
    //persomalizando a mensagem de validação
    if(estadoValidacao.valueMissing){
        f_nota.setCustomValidity("Este campo é obrigatório.")
    } else if(estadoValidacao.rangeOverflow){
        f_nota.setCustomValidity("Tá puxado saco na cara dura! Nota inválida.")
    } else if(estadoValidacao.rangeUnderflow){
        f_nota.setCustomValidity("Tenha misericordia dessa pobre alma.")
    }
    f_nota.reportValidity()
    evt.preventDefault()
});
