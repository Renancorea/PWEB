const prompt = require('prompt-sync')();
let pingadinho = parseFloat(prompt("Digite o valor do seu salario: "));
if (pingadinho <= 2000){
    console.log(" ta isento do imposto de renda(leão)")

}
else if (pingadinho > 2000 && pingadinho <= 3500){
    console.log("o salario bruto é de "+ pingadinho)
    console.log("o valor do imposto de renda é de "+ (pingadinho*0.075))
    console.log("a aliquota é de 7.5%")
}
else if (pingadinho > 3500 && pingadinho <= 5000){
    console.log("o salario bruto é de "+ pingadinho)
    console.log("o valor do imposto de renda é de "+ (pingadinho*0.15))
    console.log("a aliquota é de 15%")
}
else if (pingadinho > 5000){
    console.log("o salario bruto é de "+ pingadinho)
    console.log("o valor do imposto de renda é de "+ (pingadinho*0.225))
    console.log("a aliquota é de 22.5%")
}
