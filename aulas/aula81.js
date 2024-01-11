const nome=Symbol("descrição")
const numero=Symbol("descrição")
const corUniforme=Symbol("descrição")

const jogador={
    [nome]:"j1",
    [numero]:10,
    [corUniforme]:"amarelo"
}

for(p in jogador){
    console.log(p)
}

console.log(jogador[nome])
console.log(jogador[numero])
console.log(jogador[corUniforme])