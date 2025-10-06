const prompt = require('prompt-sync')();
let vendas = []
let opc = "sim"
while( opc == "sim" ){
console.log("Digite o nome , valor e quantidade do produto ")
let nome = prompt("Nome do produto: ")
let valor = parseFloat(prompt("Valor do produto: "))
let quantidade = parseInt(prompt("Quantidade do produto: "))

let valortotal = valor * quantidade

if ( valortotal > 500 ){
vendas.push( {
    Nome: nome,
    Valor: valor,
    ValorComDesconto: (valor-(valor*0.1)),
    Quantidade: quantidade,
    Total : (valor-(valor*0.1))* quantidade
            } )
    
}
else{
    vendas.push( {
        Nome: nome,
        Valor: valor,
        Quantidade: quantidade,
        Total : valor* quantidade
                } )
}

opc = prompt("Deseja continuar? (sim/não) ")

}

console.log(vendas)
