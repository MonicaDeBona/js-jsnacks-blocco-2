// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

    
    let number = parseInt(prompt('Inserisci un numero'));
    if (number%2 === 0) {
        console.log(number);
    } else {
        console.log(number + 1);
    }

    //altro modo

    // if (number%2 === 1) {
    //     number++;
    // }

    // console.log(number);
