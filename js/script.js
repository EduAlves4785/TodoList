const btnevento=document.getElementById("btncriar")

const boxtarefas=document.getElementById("boxtarefa")

const nome=document.getElementById("nome")
const prioridade=document.getElementById("prioridade")
console.log(nome)




function criartarefa(){
    const box=document.createElement("div")
    box.id = 'tarefacriada';

    var texto=nome.value
    var textoPrioridade=prioridade.value
    console.log(textoPrioridade)

    const btnapagar=document.createElement('button')
    btnapagar.id='btnapagar'
    btnapagar.innerHTML='Apagar'

    box.innerHTML=`
    <h2>Nome: ${texto}</h2>
    <h3>Prioridade: ${textoPrioridade}</h3>
    <label>Status</label>
    <input type="checkbox" id="checkbox">
    `
    boxtarefas.appendChild(box)
    box.appendChild(btnapagar)

    btnapagar.addEventListener('click',(e)=>{
        box.innerHTML=``
        box.remove()
    })

}





/*
boxtarefas.parentNode.removeChild(box)
box.parentNode.removeChild(nome)
 box.parentNode.removeChild(prioridade)
box.parentNode.removeChild(status)
box.parentNode.removeChild(checkbox)

*/