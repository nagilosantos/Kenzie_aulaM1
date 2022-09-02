// comece a criar a sua função add na linha abaixo
function add (numero1, numero2){
    let soma = numero1 + numero2;
    return soma;
}


// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(numero1, numero2){
    let mutiplicacao = 0;
    for (let index = 0; index < numero2; index = add(index , 1)) {
       mutiplicacao = add(numero1, mutiplicacao)
    }
    return mutiplicacao;
}


// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(numero1, numero2){
    let expo = 1;
    for (let index = 0; index < numero2; index = add(index , 1)) {
        expo = multiply(numero1, expo)
    }
    return expo;
}


// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(number){
    let fatorial = number;
    for (let index = 1; index < number; index = add(index , 1)) {
        fatorial = multiply(fatorial, index)
    }
    return fatorial
}


// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci



// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
