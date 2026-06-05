const valor= 10;


function conversor(){
const dolar = 5
const euro = 5.50

let valorDolar = valor/dolar
let valorEuro = valor/euro
return{
valorDolar,
valorEuro
}
}

let valorconvertido = conversor(valor)
console.log("o valores convertidos são: "+ valorconvertido)