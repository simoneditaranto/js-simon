// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!

setInterval(endDay, 1000);
// let showCountdown = endDay();

// creo una funzione che mi calcola il tempo rimanente a mezzanotte di oggi
function endDay() {
    
    let d = new Date();

    const countdown = new Date();


    // provo a implementare prima un calcolatore che trova quanto manca alla mezzanotte di oggi
    countdown.setHours(24 - d.getHours());
    hours = countdown.getHours();


    countdown.setMinutes(60 - d.getMinutes());
    minutes = countdown.getMinutes();


    countdown.setSeconds(60 - d.getSeconds());
    seconds = countdown.getSeconds();


    document.getElementById("time-remaining").innerHTML = "ore " + countdown.getHours() + " minuti " + countdown.getMinutes() + " secondi " + countdown.getSeconds();
    // console.log(timeRemaining);


}
