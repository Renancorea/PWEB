const prompt = require("prompt-sync")()
const a = prompt("Digite o valor de a: ")
const b= prompt("Digite o valor de b: ")
const c= prompt("Digite o valor de c: ")

delta = b**2 - 4*a*c
console.log("a:"+a+ " b: "+b+" c: "+c  )
console.log("O valor de delta é: " + delta)