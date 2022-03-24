/* train ticket price calculator */
const unit_price = 0.21
const underage_discount = 0.2
const over65_discount = 0.4

/* ask how many km the passenger needs to do */
const passenger_trip_km = 
Number(prompt('Inserisci quanti chilometri percorrerai sul treno'));
if (isNaN(passenger_trip_km)) {
    alert('Attenzione! Occorre inserire un valore numerico. Cortesemente, ricaricare la pagina')
}

/* ask for the passenger age */
const passenger_age = 
Number(prompt('Inserisci la tua età'));
if (isNaN(passenger_age)) {
    alert('Attenzione! Occorre inserire un valore numerico. Cortesemente, ricaricare la pagina')
}

/* verify if the age discount is needed and calculate total price */
let total_price = passenger_trip_km * unit_price;
let discount;

if (passenger_age < 18) {
    discount = total_price * underage_discount;
    total_price = total_price - discount;
    document.getElementById('write_here').innerHTML = 
    `Che fortuna! In quanto minorenne hai diritto a uno sconto. 
    Il costo del biglietto del treno è di ${total_price.toFixed(2).replace(".",",")} €. Grazie e Buon viaggio.`;
} else if (passenger_age >= 65) {
    discount = total_price * over65_discount;
    total_price = total_price - discount;
    document.getElementById('write_here').innerHTML = 
    `Che fortuna! In quanto "over 65" hai diritto a uno sconto. 
    Il costo del biglietto del treno è di ${total_price.toFixed(2).replace(".",",")} €. Grazie e Buon viaggio.`;
} else if (isNaN(passenger_trip_km) || isNaN(passenger_age)) {
    document.getElementById('write_here').innerHTML = 
    `I dati inseriti non sono corretti. Cortesemente ricaricare la pagina.`;
} else {
    document.getElementById('write_here').innerHTML = 
    `Il costo del biglietto del treno è di ${total_price.toFixed(2).replace(".",",")} €. Grazie e Buon viaggio.`;
}

