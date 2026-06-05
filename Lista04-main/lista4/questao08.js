const prompt = require('prompt-sync')();
const nota = prompt("Digite sua nota: ");

switch(nota){
    case nota >= 9 && nota <= 10: // pesquizei pra saber como fazia isso
        console.log("A");
        break;
    case nota >= 8 && nota <= 7:
        console.log("B");
        break;
    case nota >= 6 && nota <= 5:
        console.log("C");
        break;
    case nota >= 4 && nota <= 3:
        console.log("D");
        break;
    case nota >= 0 && nota <= 2:
        console.log("efi(F)");
        break;
    
}