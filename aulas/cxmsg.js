class Cxmsg{
    static cor="#888"
    static destino=null
    static divmsg=null

    static config=(config)=>{
        this.cor=config.cor
    }
  
    static mostrar=(titulo,texto)=>{
        this.destino=document.body
        this.titulo=titulo
        this.texto=texto
        this.divmsg=document.createElement("div")
        const estilo_divmsg=
            "display: flex;"+
            "align itens: center;"+
            "position: absolute;"+
            "top: 0px;"+
            "left: 0px;"+
            "width: 100%;"+
            "height: 100vh;"+
            "background-color: rgba(0,0,0,0.7);"

        this.divmsg.setAttribute("id","divimsg")
        this.divmsg.setAttribute("style",estilo_divmsg)
        this.destino.prepend(this.divmsg)

        const estilo_areaCxmsg=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: flex-start;"+
            "flex-direction: colum;"+
            "width: 300px;"

        const areaCxmsg=document.createElement("div")
        areaCxmsg.setAttribute("style",estilo_areaCxmsg)
        this.divmsg.appendChild(areaCxmsg)

        const estilo_tituloCxmsg=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "position: absolute;"+
            "top: 52%;"+
            "left: 50%;"+
            "transform: translate(-50%,-50%);"+
            "width: 300px;"+
            "background-color:"+this.cor+";"+
            "color: #fff;"+
            "padding: 5px;"+
            "border-radius: 5px 5px 0px 0px"

        const tituloCxmsg=document.createElement("div")
        tituloCxmsg.setAttribute("style",estilo_tituloCxmsg)
        tituloCxmsg.innerHTML=this.titulo
        areaCxmsg.appendChild(tituloCxmsg)

            const estilo_CorpoCxmsg=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "position: absolute;"+
            "top: 60%;"+
            "left: 50%;"+
            "transform: translate(-50%,-56%);"+
            "width: 300px;"+
            "background-color: #eee;"+
            "color: #000;"+
            "padding: 30px;"

        const CorpoCxmsg=document.createElement("div")
        CorpoCxmsg.setAttribute("style",estilo_CorpoCxmsg)
        CorpoCxmsg.innerHTML=this.texto
        areaCxmsg.appendChild(CorpoCxmsg)

        const estilo_rodapeCxmsg=
            "display: flex;"+
            "justify-content: space-around;"+
            "align-items: center;"+
            "position: absolute;"+
            "top: 70%;"+
            "left: 50%;"+
            "transform: translate(-50%,-76%);"+
            "width: 300px;"+
            "background-color: #ccc;"+
            "color: #000;"+
            "padding: 5px;"+
            "border-radius: 0px 0px 5px 5px"

        const rodapeCxmsg=document.createElement("div")
        rodapeCxmsg.setAttribute("style",estilo_rodapeCxmsg)
        areaCxmsg.appendChild(rodapeCxmsg)


        const estilo_BotaoCxmsg=
            "background-color:"+this.cor+";"+
            "color: #fff;"+
            "padding: 10px 50px;"+
            "border-radius: 5px;"+
            "cursor-pointer;"+
            "text-transform:uppercase;"

       const btn_ok=document.createElement("button")
       btn_ok.setAttribute("style",estilo_BotaoCxmsg)
       btn_ok.innerHTML="OK"
       rodapeCxmsg.appendChild(btn_ok)
       btn_ok.addEventListener("click",(evt)=>{
        this.ocutar()
       })

    }

    static ocutar=()=>{
        this.divmsg.remove()
    }
}
export {Cxmsg}