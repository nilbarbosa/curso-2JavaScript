const Pessoa={
    nome:"Bruno",
    getNome:function(){
        return this.nome
    },
    setNome:function(nome){
        this.nome=nome
    },
}

const p2=Pessoa
const p3=Pessoa

p3.nome="Cladisvardisson"
p2["nome"]="Gertrude"
Pessoa.setNome("patrixcrerdison")


console.log(Pessoa.nome)
console.log(p2.getNome())
console.log(p3.nome)