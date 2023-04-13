// chiedo al passeggero km e età
let chilometri = parseInt(prompt("Quanto km devi percorrere?"));
let etaPasseggero = parseInt(prompt("Quanti anni hai?"));

// lo scrivo nella console
console.log("I Km del passeggero sono: ", chilometri);
console.log("L'età del passeggero è di: ", etaPasseggero);

// moltiplico i km per il costo base 
let prezzoAlKm = (chilometri * 0.21);

// scrivo in console per assicurarmi che il prezzo sia giusto
console.log("Il prezzo al km è di: ", prezzoAlKm);

//tolgo dal prezzo lo sconto
if (etaPasseggero < 18) {
    let prezzoSconto = (prezzoAlKm * 20) / 100;
    let prezzoTotale = (prezzoAlKm - prezzoSconto)
    prezzoTotale = prezzoTotale.toFixed(2)
    console.log("Il prezzo finale è di: ", prezzoTotale);
    alert(`Il prezzo totale è di: ${prezzoTotale}`);
} else if (etaPasseggero >= 18 && etaPasseggero < 65) {
    let prezzoSconto = prezzoAlKm;
    prezzoTotale = prezzoTotale.toFixed(2)
    console.log("Il prezzo finale è di: ", prezzoTotale);
    alert(`Il prezzo totale è di: ${prezzoTotale}`);
}else{
    let prezzoSconto = (prezzoAlKm * 40) / 100;
    let prezzoTotale = (prezzoAlKm - prezzoSconto)
    prezzoTotale = prezzoTotale.toFixed(2)
    console.log("Il prezzo finale è di: ", prezzoTotale);
    alert(`Il prezzo totale è di: ${prezzoTotale}`);
}

