// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!


// memorizzo il bottone "calcola"
const buttonElement = document.querySelector("#calculate");
buttonElement.addEventListener("click", 
function(){
    
    // inizializzo la variabile che contiene la data a cui vogliamo arrivare (in questo caso lunedì alle 9:30)
    const nextDay = new Date();

    // memorizzo la scelta del giorno dell'utente
    year = 2024;
    monthElement = document.querySelector("#month").value;
    dayElement = document.querySelector("#day").value;
    hourElement = document.querySelector("#hour").value;
    minuteElement = document.querySelector("#minute").value;
    secondElement = document.querySelector("#second").value;
    console.log(monthElement, dayElement, hourElement, minuteElement, secondElement);
    // test

    nextDay.setMonth(monthElement);
    nextDay.setDate(dayElement);
    nextDay.setHours(hourElement);
    nextDay.setMinutes(minuteElement);
    nextDay.setSeconds(secondElement);
    console.log(nextDay);

    // utilizzando la funzione "setInterval" ogni secondo faccio queste operazioni per creare un countdown
    const timeRemaining = setInterval(function() {
    
        // ogni secondo verifico quale sia la data attuale
        const actualDay = new Date();
        
        // attraverso la funzione getTime() che mi restituisce il tempo in millisecondi da una certa data al 1 gennaio 1970, calcolo la differenza tra le due date sopra
        // sarà il tempo in millisecondi che c'è tra oggi e la data successiva 
        // converto questo tempo utlizzando la funzione "msToTime" e trovo quanto manca
        const countdown = msToTime(nextDay.getTime() - actualDay.getTime());
        
        // scrivo in pagina il risultato
        document.getElementById("time-remaining").innerHTML = `Alla data: ${nextDay} <br> mancano ${countdown}`;
    
    
    }, 1000);
    
    document.querySelector("#stop").addEventListener("click", function() {
        clearInterval(timeRemaining);
    })

});





// funzione che mi converte il tempo da millisecondi a "giorni : ore : minuti: secondi"
function msToTime(duration) {
    
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    const day = Math.floor((duration / (1000 * 60 * 60 * 24)));
    
    return day + ":" + hours + ":" + minutes + ":" + seconds;
}