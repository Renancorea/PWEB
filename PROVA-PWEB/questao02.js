const prompt = require('prompt-sync')();
let prova1 = parseFloat(prompt("Digite a nota da prova 1: "));
let prova2 = parseFloat(prompt("Digite a nota da prova 2: "));
let prova3 = parseFloat(prompt("Digite a nota da prova 3: "));
let prova4 = parseFloat(prompt("Digite a nota da prova 4: "));

n1 = (prova1+prova2)/2
n2 = (prova3+prova4)/2
final = ((n1*2)+(n2*3))/5

console.log("a noyta da primeira prova é "+ prova1)
console.log("a noyta da segunda prova é "+ prova2)
console.log("a noyta da terceira prova é "+ prova3)
console.log("a noyta da quarta prova é "+ prova4)
console.log("A media final e: " + final)