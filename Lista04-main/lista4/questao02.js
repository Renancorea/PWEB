const prompt = require('prompt-sync')();
const NotaFinal = prompt("Digite sua nota final ");
if(NotaFinal >= 7){
    console.log("Aprovado");
}
else {
    console.log("Reprovado");
}