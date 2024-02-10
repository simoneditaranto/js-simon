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
const countdown = nextDay.getTime() - actualDay.getTime();
console.log(countdown);

// converto questo tempo in millisecondi e trovo quanto manca
console.log(msToTime(countdown)); 



// funzione che mi converte il tempo da millisecondi a "giorni : ore : minuti: secondi"
function msToTime(duration) {
    // var milliseconds = Math.floor((duration % 1000) / 100),
    var seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    day = Math.floor((duration / (1000 * 60 * 60 * 24)));
    
    return day + ":" + hours + ":" + minutes + ":" + seconds;
    }
// console.log(msToTime(57692300));