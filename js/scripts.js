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


const price = (km * 0.21);
console.log('price', price, typeof price);

const priceContainer = document.getElementById('price-container');
console.log('priceContainer', priceContainer, typeof priceContainer);

if (ageNumber < 18) {
    const discount = (price / 100) * 20;
    console.log('discount', discount, typeof discount);

    const discountedTicket = (price - discount);
    console.log('discountedTicket', discountedTicket, typeof discountedTicket);
    
    priceContainer.innerHTML = discountedTicket;
}

else if (ageNumber > 65) {
    const discount = (price / 100) * 40;
    console.log('discount', discount, typeof discount);

    const discountedTicket = (price - discount);
    console.log('discountedTicket', discountedTicket, typeof discountedTicket);
    
    priceContainer.innerHTML = discountedTicket;
}

else if (ageNumber > 18, ageNumber < 65) {
    priceContainer.innerHTML = price;
}
