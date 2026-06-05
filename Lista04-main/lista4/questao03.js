const prompt = require('prompt-sync')();
let opc = prompt("Digite [1) para trasformar de Fareheit para Celsius\n[2} para transformar de Celsius para Fareheit: ");
if(opc == 1){
    let F = prompt("Digite a temperatura em Fareheit: ");
    let C = (F - 32) * 5/9; // pesquizei essas formulinhas no google
    console.log("A temperatura em Celsius é:"+ C);
}
else{
    let C = prompt("Digite a temperatura em Celsius: ");
    let F = (C * 9/5) + 32; // pesquizei essas formulinhas no google
    console.log("A temperatura em Fareheit é:"+ F);
}