// ESERCIZIO 1

// var parola1 = prompt('Scrivi la prima parola');
// var parola2 = prompt('Scrivi la seconda parola');

// if (parola1.length > parola2.length) {
//     document.getElementById('risultato').innerHTML = 'Parole in ordine di lunghezza: ' + parola2 + ' ' + parola1;    
// } else if (parola1.length < parola2.length) {
//     document.getElementById('risultato').innerHTML = 'Parole in ordine di lunghezza: ' + parola1 + ' ' + parola2;
// } else{
//     document.getElementById('risultato').innerHTML = 'Le due parole sono di uguale lungezza';
// }


// ESERCIZIO 2

// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.
// Variante: stampare solo i numeri pari

// var somma = 0;

// for (let i = 0; i < 5; i++) {
//     numero = parseInt(prompt('Inserisci il numero'));
//     somma += numero;
// }

// document.getElementById('risultato').innerHTML = somma;


// ESERCIZIO 2 - WHILE

// var somma = 0;
// var i = 0;

// while (i < 5) {
//     numero = parseInt(prompt('Inserisci il numero'));
//     somma += numero;
//     i++
// }

// document.getElementById('risultato').innerHTML = somma;

// ESERCIZIO 2 - VARIANTE DISPARI

// var somma = 0;

// for (let i = 0; i < 5; i++) {
//     numero = parseInt(prompt('Inserisci il numero'));
//     if (numero % 2 == 0) {
//         somma += numero;
//     }
// }

// document.getElementById('risultato').innerHTML = somma;


// ESERCIZIO 3
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

// var dispari = [];
// var numero = 0;

// for (let i = 0; i < 6; i++) {
//     numero = parseInt(prompt('Inserisci il numero'));
//     if (numero % 2 != 0) {
//         dispari.push(numero);
//     }
// }

// document.getElementById('risultato').innerHTML = dispari;


// ESERCIZIO 4
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// var listaCognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
// cognomeUtente = prompt('Inserisci il tuo cognome');
// cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);
// listaCognomi.push(cognomeUtente);
// console.log(listaCognomi);

// for (let i = 0; i < listaCognomi.length; i++) {
//     listaCognomi[i] = listaCognomi[i].charAt(0).toUpperCase() + listaCognomi[i].slice(1);
// }

// listaCognomi.sort();
// console.log(listaCognomi);

// var trovato = false;

// for (let i = 0; i < listaCognomi.length && trovato == false; i++) {
//     if (listaCognomi[i] == cognomeUtente) {
//         console.log('Puoi partecipare al party esclusivo di Gatsby');
//         trovato = true;
//     }
// }