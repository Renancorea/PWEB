const prompt = require('prompt-sync')();
const idade = prompt("Digite sua idade: ");
if (idade < 0) {
    console.log("NEm nAsCendo ONtem");
}
else if (idade <= 12) {
    console.log("Criança");
}
else if (idade <= 17 && idade >= 13) {
    console.log("Adolescente");
}
else if (idade <= 59 && idade >= 18) {
    console.log("Adulto");
}
else {
    console.log("Idoso");
}
