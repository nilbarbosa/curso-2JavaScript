const cursosTodos=[...document.getElementsByClassName("cursos")]
const cursosc1=[...document.getElementsByClassName("cursos")]
const cursosc2=[...document.getElementsByClassName("cursos")]

console.log(cursosTodos)
console.log(cursosc1)
console.log(cursosc2)

cursosc1.map((el)=>{
    el.classList.add("destaque")
})