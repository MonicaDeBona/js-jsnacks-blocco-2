// Calcola la somma dei primi 10 numeri di un array.

const newArray = [ 1, 3, 8, 4, 7, 8, 4, 5, 3, 2, 4, 5, 7, ]

let somma = 0;
let average;


for (let i = 0; i < 10; i++) {
    somma += newArray[i];
    average = somma / 10;
}
console.log(somma);
console.log(average);

