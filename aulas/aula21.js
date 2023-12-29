const converterInt=(e)=>parseInt(e)
const dobrar=(e)=>e*2
let num=['1','2','3','4','5'].map(dobrar)
console.log(num)



/* const el=document.getElementsByTagName("div")
const val=Array.prototype.map.call(el,({innerHTML})=>innerHTML)
console.log(val)
 */
/* let el=document.getElementsByTagName("div")
el=[...el]
el.map((e, i)=> {
    e.innerHTML="CBF cursos"
}) */


/* const cursos=['HTML','CSS','JavaScript','PHP','React']
let c=cursos.map((elemento,i)=> {
    console.log('curso ' + elemento + '- Posição do curso: ' +i)
    return elemento
})

console.log(c) */