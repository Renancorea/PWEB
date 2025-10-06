const prompt = require("prompt-sync")()
let celcios = prompt("Digite a temperatura em celcios: ")

console.log("A temperatura em celcios é: " + celcios)

let fahrenheit = (celcios * 9/5) + 32
console.log("A temperatura em fahrenheit é: " + fahrenheit)

let kenvim = celcios + 273.15
console.log("A temperatura em kenvim é: " + kenvim)