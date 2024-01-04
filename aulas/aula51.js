function Pessoa(pNome, pIdade){
        this.nome=pNome,
        this.idade=pIdade,
        this.getNome=function(){
            return this.nome
        },
        this.getIdade=function(){
            return this.idade
        },
        this.setNome=function(nome){
            this.nome=nome
        },
        this.setIdade=function(idade){
            this.idade=idade
        },
        this.info=function(){
            console.log(`Nome: ${this.nome}`)
            console.log(`Idade: ${this.idade}`)
            console.log(`---------------------`)
        }
    }


let pessoas=[]

const btn_add=document.querySelector("#btn_add")
const res=document.querySelector(".res")

const addPessoa=()=>{
    res.innerHTML=""
    pessoas.map((p)=>{
        const div=document.createElement("div")
        div.setAttribute("class","pessoa")
        div.innerHTML=`Nome: ${p.getNome()} | Idade: ${p.getIdade()}.<br/>`
        res.appendChild(div)
    })
}

btn_add.addEventListener("click", (evt) => {
    const nome = document.querySelector("#f_nome");
    const idade = document.querySelector("#f_idade");

    // Verifica se o nome ou a idade estão vazios
    if (nome.value === "" || idade.value === "") {
        alert("Preencha os dados corretamente.");
        return; // Aborta a adição de pessoa se os dados não estiverem preenchidos
        
    }

    const p = new Pessoa(nome.value, idade.value);
    pessoas.push(p);
    nome.value = "";
    idade.value = "";
    nome.focus();
    console.log(pessoas);
    addPessoa();
});

res.innerHTML=pessoas.value