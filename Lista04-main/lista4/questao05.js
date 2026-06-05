const prompt = require('prompt-sync')();
let num1 = prompt("Digite o numero: ");

if(num1 % 2 == 0){ 
    console.log("par");
}
else{
    console.log("impar");
}