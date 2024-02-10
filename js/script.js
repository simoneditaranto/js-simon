// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!

// setInterval(endDay, 1000);
// imposto una data fissa

// inizializzo 2 variabili
// la prima che contiene la data a cui vogliamo arrivare (nel primo caso lunedì alle 9:30)
const nextDay = new Date("February 13, 2024 9:30:00");
console.log("nextDay", nextDay);
// la seconda che contiene la data attuale
const actualDay = new Date();
console.log("actualDay", actualDay);


// attraverso la funzione getTime() che mi restituisce il tempo in millisecondi da una certa data al 1 gennaio 1970, calcolo la differenza tra le due date sopra
// sarà il tempo in millisecondi che c'è tra oggi e la data successiva 
// converto questo tempo utlizzando la funzione "msToTime" e trovo quanto manca
const countdown = msToTime(nextDay.getTime() - actualDay.getTime());

// scrivo in pagina il risultato
document.getElementById("time-remaining").innerHTML = `Alla data: ${nextDay} <br> mancano ${countdown}`;



// funzione che mi converte il tempo da millisecondi a "giorni : ore : minuti: secondi"
function msToTime(duration) {
    
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    const day = Math.floor((duration / (1000 * 60 * 60 * 24)));
    
    return day + ":" + hours + ":" + minutes + ":" + seconds;
}