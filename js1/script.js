// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

const newArray = [ ]


for (let i = 0; i < 6; i++) {
    number = parseInt(prompt('Inserisci un numero'));
    if (number%2 === 1) {
        newArray.push(number);
    }
}

console.log(newArray);

