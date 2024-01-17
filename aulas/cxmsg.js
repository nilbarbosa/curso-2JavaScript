class Cxmsg{
    static cor="#888"
    static destino=null
    static divmsg=null

    static config=(config)=>{
        this.cor=config.cor
    }

    static mostar=(titulo,texto)=>{
        this.destino=document.body
        this.titulo=titulo
        this.texto=texto
        this.divmsg=document.createElement("div")
        const estilo_divmsg=
            "display: flex;"+
            "justify-content: center;"+
            "align-items: center;"+
            "position: absolute;"+
            "top: 0px;"+
            "left: 0px;"+
            "width: 100%;"+
            "height: 100vh;"+
            "background-color: rgba(0,0,0,0.7);"

        this.divmsg.setAttribute("id","divmsg")
        this.divmsg.setAttribute("style",estilo_divmsg)
        this.destino.prepend(this.divmsg)

        //area da caixa
        const estilo_area_Cxmsg=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: flex-start;"+
            "flex-direction: column;"+
            "width: 300px;"

        const area_Cxmsg=document.createElement("div")
        area_Cxmsg.setAttribute("style",estilo_area_Cxmsg)
        this.divmsg.appendChild(area_Cxmsg)

        //area do título
        const estilo_titulo_Cxmsg=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 300px;"+
            "background-color:"+this.cor+";"+
            "color: #fff;"+
            "padding: 5px;"+
            "border-radius: 5px 5px 0px 0px;"

        const titulo_Cxmsg=document.createElement("div")
        titulo_Cxmsg.setAttribute("style",estilo_titulo_Cxmsg)
        titulo_Cxmsg.innerHTML=this.titulo
        area_Cxmsg.appendChild(titulo_Cxmsg)

        //area do corpo
        const estilo_corpo_Cxmsg=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #eee;"+
            "color: #000;"+
            "padding: 30px 5px;"

        const corpo_Cxmsg=document.createElement("div")
        corpo_Cxmsg.setAttribute("style",estilo_corpo_Cxmsg)
        corpo_Cxmsg.innerHTML=this.texto
        area_Cxmsg.appendChild(corpo_Cxmsg)

        //area do rodape
        const estilo_rodape_Cxmsg=
            "display: flex;"+
            "justify-content: space-around;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #ccc;"+
            "color: #000;"+
            "padding: 5px;"+
            "border-radius: 0px 0px 5px 5px;"

        const rodape_Cxmsg=document.createElement("div")
        rodape_Cxmsg.setAttribute("style",estilo_rodape_Cxmsg)
        area_Cxmsg.appendChild(rodape_Cxmsg)

        //botão
        const estilo_botao=
            "background-color:"+this.cor+";"+
            "color: #fff;"+
            "padding: 10px 50px;"+
            "border-radius: 5px;"+
            "cursor: pointer;"+
            "text-transform: uppercase;"

        const btn_ok=document.createElement("button")
        btn_ok.setAttribute("style",estilo_botao)
        btn_ok.innerHTML="OK"
        rodape_Cxmsg.appendChild(btn_ok)

        btn_ok.addEventListener("click",(evt)=>{
            this.ocultar()
        })
    }
    static ocultar=()=>{
        this.divmsg.remove()
    }
}
export {Cxmsg}