const url=document.getElementById("url")
const btn_url=document.getElementById("btn_url")

btn_url.addEventListener("click",(evt)=>{
    //window.location="https://google.com.br"
    //window.location.replace("https://google.com.br") //substitui o link atual pelo link determinado e deleta a url corrente do histórico.
    //window.location.assign("https://google.com.br")  //substitui o link atual pelo link determinado mas NÃO deleta a url corrente do histórico.
    //window.location.reload() //recarrega a página.

    //window.history.back() //volta para a página anterior.
    //window.history.forward() //vai pra próxima página do histórico.
    //window.history.go(2) permite navegar por qualquer página do histórico.
    window.location=url.value
})