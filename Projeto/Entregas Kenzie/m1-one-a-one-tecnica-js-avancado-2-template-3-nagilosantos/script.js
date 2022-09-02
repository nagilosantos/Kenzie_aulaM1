//Desenvolva seu código aqui!

const lista = [1,2,3,4,4,4,4,4,5,6];
const lista2 = [1, 1, 2, 1, 1];
function verificaLista(listaNumeros, numero){
    let contador = 0
    for (let index = 0; index < listaNumeros.length; index++) {
        if(listaNumeros[index] == numero){
            contador++
        }
    }
    if(contador % 5 == 0){
        return `numero ${numero} é mutiplo de 5`
    }else{
        return `numero ${numero} não é mutiplo de 5`
    }
}


console.log(verificaLista(lista2, 1))