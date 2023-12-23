function* perguntas(){
    const nome=yield 'Qual seu nome?'
    const esporte=yield 'Qual o seu esporte favorito?'
    return 'seu nome é ' + nome + 'seu esporte favorito é ' + esporte
}

const itp=perguntas()
console.log(itp.next().value)
console.log(itp.next('bruno').value)
console.log(itp.next('natação').value)