let i=null

for(i=0;i<10;i++){
    console.log("valor")
    console.log(i)
}

for(i=0;i<10;i++)
    console.log("valor")
//se holver somente um comando, e intendido automaticamente que ele faz parte do for(ou de qualquer outro loop), não sendo obrigatório o uso das chaves.

for(i=0;i<10;i++);
//caso o for não ouver bloco, se faz necessário o uso do ponto e vírgula.