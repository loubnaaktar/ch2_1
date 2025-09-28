const prompt = require("prompt-sync")();


let a = prompt("Entrez le premier nombre :");
let b = prompt("Entrez le deuxième nombre :");

if (a > b) {
    console.log("Le plus grand nombre est : " + a);
} else if (b > a) {
    console.log("Le plus grand nombre est : " + b);
} else {
    console.log("Les deux nombres sont égaux.");
}

