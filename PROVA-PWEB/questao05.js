const prompt = require('prompt-sync')();
let percorridoo = parseFloat(prompt("Digite a distancia percorrida em km: "));
let comustivell = parseFloat(prompt("Digite quantos litros de conbustivel foram gastos: "));

media = percorridoo/comustivell

console.log("A distancia percorrida foi de \n"+ percorridoo + " km")
console.log("O combustivel gasto foi de \n"+ comustivell + " litros")
console.log("A media de consumo foi de \n" + media + "km/l")