
const body=document.body

const estiloTopo=
    "display: flex;"+
    "justify-content: space-around;"+
    "align-items: center;"+
    "background-color: #00f;"

const topo=document.createElement("div")
topo.setAttribute("id","topo")
topo.setAttribute("style",estiloTopo)
body.prepend(topo)

const estiloImgLogo="width:200px"

const logo=
    "<div id='logo' class='logo'>" +
        "<img src='logo.png' title='CBFCursos' style='"+estiloImgLogo+"'/>" +
    "</div>"

topo.innerHTML+=logo

const login=
   "<div id='login' class='login'>"+
        "<p id='matricula'>matrícula: <span></span></p>"
        "<p id='nome'>Nome: <span></span></p>"
   "</div>"

login.innerHTML+=login



