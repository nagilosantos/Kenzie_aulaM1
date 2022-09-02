const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let numeros = [];
    for (let index = 1; index <= 25; index++) {
        numeros[index] = index

    } 
    return numeros
}
console.log(kata1())

function kata2() {
    let numeros = [];
    for (let index = 25; index >= 1; index--) {
        numeros.push(index);
    } 
    return numeros
}
console.log(kata2())

function kata3() {
    let numeros = [];
    for (let index = 1; index <= 25; index++) {
        numeros.push(index * (-1));
    } 
    return numeros
}
console.log(kata3())

function kata4() {
    let numeros = [];
    for (let index = 25; index >= 1; index--) {
        numeros.push(index * (-1));
    } 
    return numeros
}
console.log(kata4())

function kata5() {
   
    let numeros = [];
    for (let index = 25; index >= 0; index--) {
        if( index % 2 !== 0){
            numeros.push(index);  
        }
    }  
    for (let index = 1; index <= 25; index++) {
        if( index % 2 !== 0){
          numeros.push(index * (-1));  
        }
    } 

    return numeros;
}
console.log(kata5())

function kata6() {
    let numeros = [];
     for (let index = 1; index <= 100; index++) {
        if( index % 3 == 0){
          numeros.push(index);  
        }
    } 
    return numeros
}
console.log(kata6())

function kata7() {
    let numeros = [];
     for (let index = 1; index <= 100; index++) {
        if( index % 7 == 0){
          numeros.push(index);  
        }
    } 
    return numeros
}
console.log(kata7())

function kata8() {
    let numeros = [];
     for (let index = 100; index >= 1; index--) {
        if( index % 7 == 0 && index % 3 == 0){
          numeros.push(index);  
        }
    } 
    return numeros
}
console.log(kata8())

function kata9() {
    let numeros = [];
    for (let index = 1; index <= 100; index++) {
       if( index % 2 !== 0 && index % 5 == 0){
         numeros.push(index);  
       }
   } 
   return numeros
}
console.log(kata9())

function kata10(arrey) {
    let numeros = [];
    numeros = arrey;
    return numeros
}
console.log(kata10(sampleArray))

function kata11(arrey) {
    let numeros = [];
    for (let index = 0; index < arrey.length; index++) {
        if(arrey[index] % 2 == 0){
            numeros.push(arrey[index])
        }
    }
    return numeros
}
console.log(kata11(sampleArray))

function kata12(arrey) {
    let numeros = [];
    for (let index = 0; index < arrey.length; index++) {
        if(arrey[index] % 2 !== 0){
            numeros.push(arrey[index])
        }
    }
    return numeros
}
console.log(kata12(sampleArray))

function kata13(arrey) {
    let numeros = [];
    for (let index = 0; index < arrey.length; index++) {
        if(arrey[index] % 8 == 0){
            numeros.push(arrey[index])
        }
    }
    return numeros
}
console.log(kata13(sampleArray))

function kata14(arrey) {
    let numeros = [];
    for (let index = 0; index < arrey.length; index++) {
       numeros.push(arrey[index] * arrey[index])
        /*if(arrey[index] == arrey[index]){
            numeros.push(arrey[index] * arrey[index])
        }*/
    }
    return numeros
}
console.log(kata14(sampleArray))

function kata15() {
    //let numeros = 0;
    let soma = 0;
    for (let index = 1; index < 20; index++) {
       soma = index + soma;
        
    }
    return soma;
}
console.log(kata15())

function kata16(arrey) {
    //let numeros = [];
    let soma = 0;
    for (let index = 0; index < arrey.length; index++) {
       soma = arrey[index] + soma;
    }
    return soma
}
console.log(kata16(sampleArray))

function kata17(arrey) {
   
    let menorElemento = arrey[0];
    for (let index = 0; index < arrey.length; index++) {
         if(arrey[index] < menorElemento){
            menorElemento = arrey[index]
        }
        
    }
    return menorElemento
}
console.log(kata17(sampleArray))

function kata18(arrey) {
    
    let maiorElemento = arrey[0];
    for (let index = 0; index < arrey.length; index++) {
         if(arrey[index] > maiorElemento){
            maiorElemento = arrey[index]
        }
        
    }
    return maiorElemento
}
console.log(kata18(sampleArray))

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
