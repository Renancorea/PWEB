const prompt = require('prompt-sync')();

let opc = prompt("Digite a operacao que quer fazer:\n[+]\n[-]\n[*]\n[/]\n[%]");
let n1;
let n2;

switch (opc) {
    case '+':
        n1 = prompt("Digite o primeiro numero: ");
        n2 = prompt("Digite o segundo numero: ");
        console.log("A soma é: " + n1 + n2);
        break;

    case '-':
        n1 = prompt("Digite o primeiro numero: ");
        n2 = prompt("Digite o segundo numero: ");
        console.log("A sobtração é: " + n1 - n2);
        break;

    case '*':
        n1 = prompt("Digite o primeiro numero: ");
        n2 = prompt("Digite o segundo numero: ");
        console.log("A multiplicação é: " + n1 * n2);
        break;

    case '/':
        n1 = prompt("Digite o primeiro numero: ");
        n2 = prompt("Digite o segundo numero: ");
        console.log("A divisao é: " + n1 / n2);
        break;
    case '%':
        n1 = prompt("Digite o primeiro numero: ");
        n2 = prompt("Digite o segundo numero: ");
        console.log("A porcentagem é: " + (n1 * (n2/100)));
        break;
}
