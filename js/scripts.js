/*
   1) Chiedere i km da percorrere
   2) Chiedere l'età
   3) Calcolare il prezzo del biglietto
      -Se minorenne si applica il 20% di sconto
      -Se over 65 si applica il 40% di sconto
*/

const km = prompt('Scrivere il numero di km da percorrere');
console.log('km', km, typeof km);

const kmNumber = parseInt(km);
console.log('kmNumber', kmNumber, typeof kmNumber);

const age = prompt('Scrivere l\'età del passeggero');
console.log('age', age, typeof age);

const ageNumber = parseInt(age);
console.log('ageNumber', ageNumber, typeof ageNumber);

