// Generatore di persone fittizie casuali
// Il grande gatsby ha una lista di nomi e cognomi 
// da queste vuole generare una falsa lista di invitiati con nome e cognome

const names = ['Michela', 'Giuseppina', 'Taylor','Donna', 'Marsha', 'Fabio', 'Roberto'];
const lastnames = ['Cappelletti', 'Jager', 'Porcinelli' , 'Buffetti' , 'Forghieri', 'Papagni', 'Marazzini'];

// let newArray = [];


// for (let i=0; i < names.length; i++) {
//     newArray.push(names[i] + lastnames[i]);

// }

// console.log(newArray);

let randomNameIndex = Math.floor( Math.random () * (names.length));
let randomLastNameIndex = Math.floor( Math.random () * (lastnames.length));

let newArray = names [randomNameIndex] + " " + lastnames[randomLastNameIndex];

for (let i = 0; i < Math.ceil (Math.random() * 15) + 4 ; i++) {
    let randomNameIndex = Math.floor( Math.random () * (names.length));
    let randomLastNameIndex = Math.floor( Math.random () * (lastnames.length));

    let newArray = names [randomNameIndex] + " " + lastnames[randomLastNameIndex];
}

console.log(newArray);
