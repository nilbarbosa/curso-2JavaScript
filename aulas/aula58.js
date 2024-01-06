class CarroPadrao{
    constructor(){
        if(this.constructor===CarroPadrao){
            throw new TypeError("esta classe não pode ser instanciada") //usando um TypeErro para não permitir a intancia dessa classe por ela ser ultilzada como "abstract".
        }
        if(this.ligar===undefined){
            throw new TypeError("é obrigatório implementar o metodo 'ligar'") //obrigado a implementação do metodo ligar.
        }
        if(this.desligar===undefined){
            throw new TypeError("é obrigatório implementar o metodo 'desligar'") 
        }
        this.rodas=4
        this.portas=4
        this.ligado=false
    }
}

class Carro extends CarroPadrao{
    constructor(tipo,stagioTurbo){
        super()
        this.turbo=new Turbo(stagioTurbo)
        if(tipo==1){
            this.velMax=120
            this.nome="Normal"
        } else if(tipo==2){
            this.velMax=160
            this.nome="Esportivo"
        } else if(tipo==3){
            this.velMax=200
            this.nome="Super Esportivo"
        }
        this.velMax=this.turbo.potencia
    }
    info(){
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log(this.portas)
        console.log(this.rodas)
        console.log(this.ligado)
        console.log("------------------")
    }
}

class Turbo{
    constructor(e){
        if(e==0) {
            this.potencia=0
        }
        else if(e==1){
            this.potencia=50
        }
        else if(e==2){
            this.potencia=75
        }
        else if(e==3){
            this.potencia=100
        }
    }

    ligar(){
        this.ligado=true
    }
    desligar(){
        this.ligado=false
    }
}
class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4,estagioTurbo)
        this.tipoInfo=1
        this.velMax=300+this.turbo.potencia
        this.nome="carro Especial"
    }
    info(){
        if(this.tipoInfo==1){
            super.info()
        } else{
        console.log(`Nome: ${this.nome}`)
        console.log(`Vel-max: ${this.velMax}`)
        console.log(`Turbo: ${this.turbo.potencia}`)
        /* console.log(`Portas: ${this.portas}`)
        console.log(`Rodas: ${this.rodas}`)
        console.log(this.nome) */
        console.log("------------------")
        }
    }
}
 
const c1=new Carro(1,0)
const c2=new Carro(1,1)
const c3=new CarroEspecial(3)


c1.info()
c2.info()
c3.info()





