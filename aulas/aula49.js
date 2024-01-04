class Carro{
    constructor(parNome,parTipo){
        this.nome=parNome
        if(parTipo==1){
            this.parTipo="esportivo"
            this.velmax=300
        }else if(parTipo==2){
            this.parTipo="ultilitário"
            this.velmax=100
        } else if(parTipo==3){
            this.parTipo="passeio"
            this.velmax=160
        }else{
            this.parTipo="militar"
            this.velmax=180
        }
        
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.parTipo
    }
    getVelmax(){
        return this.velmax
    }

    getInfo(){
        return [this.nome,this.tipo,this.velmax]
    }

    setNome(nome){
        this.nome=nome
    }
    info(){
        console.log(`nome: ${this.nome}`)
        console.log(`tipo: ${this.parTipo}`)
        console.log(`velocidade Máxima: + ${this.velmax}`)
        console.log("-----------------------------")
    }
}

let c1=new Carro("rapidao",1)
let c2=new Carro("super luxo",2)
let c3=new Carro("bombadão",5)
let c4=new Carro("carrego tudo",3)



/* c1.info()
c2.info() */
//console.log(c1.info()[0])
c1.setNome("nao")