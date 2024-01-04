class Pessoa{
    constructor(parNome, parIdade){
        this.nome=parNome
        this.idade=parIdade
    }
}

let p1=new Pessoa("bruno",20)
let p2=new Pessoa("Vittor",30)
let p3=new Pessoa("Brenasclarteo",120)


console.log(p1.nome,p1.idade)
console.log(p2.nome,p2.idade)
console.log(p3.nome,p3.idade)