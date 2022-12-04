// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const myList = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
];


let sum = 0;


// for (let i = 0; i < myList.length; i++) {
//     if ( i%2 === 1) {
//         sum += myList[1];
//     }
// }

for (let i = 0; i < myList.length; i+=2) {
    sum += myList[i];
}