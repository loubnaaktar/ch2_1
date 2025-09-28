
const prompt = require("prompt-sync")();

let score = prompt("Entrez le score (0-100) :");

switch (true) {
    case (score >= 90 && score <= 100):
        console.log("Note : A");
        break;
    case (score >= 80 && score <= 89):
        console.log("Note : B");
        break;
    case (score >= 70 && score <= 79):
        console.log("Note : C");
        break;
    case (score >= 60 && score <= 69):
        console.log("Note : D");
        break;
    case (score >= 0 && score < 60):
        console.log("Note : F");
        break;
    default:
        console.log("Score invalide !");
    }