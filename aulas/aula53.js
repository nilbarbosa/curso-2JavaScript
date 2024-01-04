class Carro{ //classe pai
    constructor(nome,portas){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=true
    }
    setColor=function(cor){
        this.cor=cor
    }
}

class Militar extends Carro{ //classe filho
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem=blindagem
        this.municao=municao
        this.setColor("verde")
    }
    atirar=function(){
        if(this.municao>0) {
            this.municao--
        }
    }
}

const c1=new Carro("Normal",4)
c1.ligar()
c1.setColor("preto")

const c2=new Militar("militar",2,12,20)

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado?"sim":"não")}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log("-----------------------")


console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Ligado: ${(c2.ligado?"sim":"não")}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Cor: ${c2.cor}`)
console.log(`Munição: ${c2.municao}`)
