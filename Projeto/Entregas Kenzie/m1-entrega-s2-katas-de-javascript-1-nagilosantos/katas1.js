function oneThroughTwenty() {
  let arrayNumeros = [];
  for (let numeros = 1; numeros <= 20; numeros++) {
    arrayNumeros[numeros -1] = numeros;
  }
  return arrayNumeros;
}
//call function oneThroughTwenty
console.log(oneThroughTwenty());

function evensToTwenty() {
  let arrayNumeros = [];
  for (let numeros = 1; numeros <= 20; numeros++) {
    if( numeros % 2 == 0 ){
      arrayNumeros.push(numeros);
    }
  }
  return arrayNumeros;
}
//call function evensToTwenty
console.log(evensToTwenty());

function oddsToTwenty() {
  let arrayNumeros = [];
  for (let numeros = 1; numeros <= 20; numeros++) {
    if( numeros % 2 ==! 0 ){
      arrayNumeros.push(numeros);
    }
  }
  return arrayNumeros;
   
}
//call function oddsToTwenty
console.log(oddsToTwenty());

function multiplesOfFive() {
  let arrayNumeros = [];
  for (let numeros = 1; numeros <= 100; numeros++) {
    if( numeros % 5 == 0 ){
      arrayNumeros.push(numeros);
    }
  }
  return arrayNumeros;
}
//call function multiplesOfFive
console.log(multiplesOfFive());

function squareNumbers() {
  let arrayNumeros = [];
  for (let numeros = 1; numeros <= 10; numeros++) {
    if( numeros == numeros ){
      arrayNumeros[numeros -1] = numeros * numeros;
    }
  }
  return arrayNumeros;
}
//call function squareNumbers
console.log(squareNumbers());

function countingBackwards() {
  let arrayNumeros = [];
  for (let numeros = 20; numeros >= 1; numeros--) {
    //arrayNumeros[numeros] = numeros;
    arrayNumeros.push(numeros);
  }
  return arrayNumeros;
}
//call function countingBackwards
console.log(countingBackwards());

function evenNumbersBackwards() {
  let arrayNumeros = [];
  for (let numeros = 20; numeros >= 1; numeros--) {
    if(numeros % 2 == 0){
    //arrayNumeros[numeros] = numeros;
    arrayNumeros.push(numeros);
    }
  }
  return arrayNumeros;
}
//call function evenNumbersBackwards
console.log(evenNumbersBackwards());

function oddNumbersBackwards() {
  let arrayNumeros = [];
  for (let numeros = 20; numeros >= 1; numeros--) {
    if(numeros % 2 !== 0){
    //arrayNumeros[numeros] = numeros;
    arrayNumeros.push(numeros);
    }
  }
  return arrayNumeros;
}
//call function oddNumbersBackwards
console.log(oddNumbersBackwards());

function multiplesOfFiveBackwards() {
  let arrayNumeros = [];
  for (let numeros = 100; numeros >= 1; numeros--) {
    if(numeros % 5 == 0){
    //arrayNumeros[numeros] = numeros;
    arrayNumeros.push(numeros);
    }
  }
  return arrayNumeros;
} 
//call function multiplesOfFiveBackwards
console.log(multiplesOfFiveBackwards());

function squareNumbersBackwards() {
  let arrayNumeros = [];
  for (let numeros = 10; numeros >= 1; numeros--) {
    if(numeros == numeros){
    //numeros = numeros * numeros; crash de pagina
    arrayNumeros.push(numeros * numeros);
    }
  }
  return arrayNumeros;
}
//call function squareNumbersBackwards
console.log(squareNumbersBackwards());
