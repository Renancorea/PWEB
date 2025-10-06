const prompt = require("prompt-sync")()
let metros = prompt("Digite em metros ")
let centimetros = metros * 100
let milimetros = metros * 1000
let km = metros/1000
console.log("o valor em metros é " + metros)
console.log("o valor em centimetros é " + centimetros)
console.log("o valor em milimetros é "+ milimetros)
console.log("o valor em km é "+ km)
