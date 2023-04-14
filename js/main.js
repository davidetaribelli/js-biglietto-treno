// chiedo al passeggero km e età
let chilometri = parseInt(prompt("Quanto km devi percorrere?"));
let etaPasseggero = parseInt(prompt("Quanti anni hai?"));

// moltiplico i km per il costo base 
let prezzoTotale = (chilometri * 0.21);

//tolgo dal prezzo lo sconto
if (etaPasseggero < 18) {

    prezzoTotale *= 0.8; 
    prezzoTotale = prezzoTotale.toFixed(2)
    alert(`Il prezzo totale è di: ${prezzoTotale}`);

} else if (etaPasseggero >= 18 && etaPasseggero < 65) {

    prezzoTotale = prezzoTotale.toFixed(2)
    alert(`Il prezzo totale è di: ${prezzoTotale}`);

}else{

    prezzoTotale *= 0.4; 
    prezzoTotale = prezzoTotale.toFixed(2)
    alert(`Il prezzo totale è di: ${prezzoTotale}`);

}


