class Jogador{
    constructor(nome){
        this.nome=nome
        this.id=Symbol()
    }
}

let jogadores=[new Jogador("J1"),new Jogador("J2"),new Jogador("J3"),new Jogador("J4"),,new Jogador("J1"),new Jogador("J3")]

let s=[]


let s_Jogadores=jogadores.filter((j)=>{
    return j.nome=="J1"
})

s=s_Jogadores.map((j)=>{
    return j.id
})

console.log(s_Jogadores)
console.log(s)