const prompt = require('prompt-sync')();
const ano = prompt("Digite o ano voçê quer saber se é bisexto: ");
if(ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)){ // 1900 não é bisexto e 2000 (divisivel por 400) é bisexto
    console.log("O ano é bisexto");
}
