const prompt = require('prompt-sync')();
const tipo = prompt("digite [1] para estudande \n [2] para aposentado \n [3] para regular")

switch(tipo){
    case '1':
        console.log("o valor do desconto é de 50%");
    break;
    case '2':
        console.log("o valor do desconto é de 30%");
    break;
    case '3':
        console.log("sem desconto");
    break;
}