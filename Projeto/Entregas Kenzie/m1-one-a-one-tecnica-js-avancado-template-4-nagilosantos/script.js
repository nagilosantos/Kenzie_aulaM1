const listaDeNumeros = [1,2,3,4,5,6,7,8,9]
const listaDeNumeros2 = [1,1,2,1,1]
function encontrarValor(listaDeNumeros, numero){

    let contador = 0;
    for (let index = listaDeNumeros.length; index >= 0; index--) {
       //console.log(listaDeNumeros[index])
        if(listaDeNumeros[index] > numero){
            contador++
        }
    }
    return contador
}
console.log(encontrarValor(listaDeNumeros, 4))
console.log(encontrarValor(listaDeNumeros2, 1))
