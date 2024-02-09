// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!

// setInterval(endDay, 1000);
// imposto una data fissa

function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    
    
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }
console.log(msToTime(57692300));

const tomorrow = new Date("February 10, 2024 9:30:00");
console.log(tomorrow);

console.log(Math.floor(9.5));
// test

const countdown = new Date();


if(tomorrow.getDate() != countdown.getDate()) {
    console.log(tomorrow.getDate());
    console.log(countdown.getDate());


    countdown.setHours(24 - countdown.getHours() + tomorrow.getHours());

}

console.log(countdown.getHours());

// creo una funzione che mi calcola il tempo rimanente alle 9.30 di domani
function endDay() {
    


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
