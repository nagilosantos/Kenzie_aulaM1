# Simulado de entrevista técnica
Desenvolva uma função chamada **verificaLista()** que recebe dois parâmetros:
-   O primeiro deve ser uma lista de números.
-   O segundo um número.

Sua função deve contar quantas vezes o **número passado por parâmetro** aparece dentro da **lista passada por parâmetro**. Caso a quantidade de vezes que o **número** aparece dentro da lista seja **multiplo de 5**, deve retornar a seguinte string:
```javascript
"É multiplo de 5"
```
Caso não seja, deve retornar:
```javascript
"Não é multiplo de 5"
```

Exemplo:
```javascript
const lista = [1,2,3,4,4,4,4,4,5,6];
verificaLista(lista, 4);
// A função deve retornar: "É multiplo de 5"
// Pois o número 4 aparece 5 vezes.
```
Similarmente,
```javascript
const lista = [1, 1, 2, 1, 1];
verificaLista(lista, 1);
// A função deve retornar: "Não é multiplo de 5"
// Pois o número 1 aparece 4 vezes.
```











