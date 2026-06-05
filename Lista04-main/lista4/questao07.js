const prompt = require('prompt-sync')();
const num1 = prompt("Digite o primeiro numero: ");
const num2 = prompt("Digite o segundo numero: ");
const num3 = prompt("Digite o terceiro numero: ");

if(num1 > num2 && num1 > num3){
    console.log("O maior numero é: " + num1);
}
else if(num2 > num1 && num2 > num3){
    console.log("O maior numero é: " + num2);
}
else{
    console.log("O maior numero é: " + num3);
}   