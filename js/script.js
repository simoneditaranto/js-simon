// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!

const d = new Date();

const countdown = new Date();

// provo a implementare prima un calcolatore che trova quanto manca alla mezzanotte di oggi
countdown.setHours(24 - d.getHours());
console.log("ore", countdown.getHours());

countdown.setMinutes(60 - d.getMinutes());
console.log("minuti", countdown.getMinutes());

countdown.setSeconds(60 - d.getSeconds());
console.log("seconedi", countdown.getSeconds());
