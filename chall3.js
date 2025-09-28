const prompt = require("prompt-sync")();

let age = prompt("Entrez votre âge :");

if (age >= 90 && age <= 100) {
    console.log("Catégorie A");
} else if (age >= 80 && age <= 89) {
    console.log("Catégorie B");
} else if (age >= 70 && age <= 79) {
    console.log("Catégorie C");
} else if (age >= 60 && age <= 69) {
    console.log("Catégorie D");
} else if (age < 60) {
    console.log("Catégorie F");
} else {
    console.log("Âge non valide.");
}

if (age >= 18) {
    console.log("Éligible au vote");
} else {
    console.log("Non éligible au vote");
}