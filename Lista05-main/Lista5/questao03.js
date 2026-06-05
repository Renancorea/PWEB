const presenca = [true,false,true,true,true,false,false,true,true,true,true,false,true,true,false,false,false,true,true,false]

function frequencia(presenca){
let estava = presenca.filter(item => item === true).length
let aulsa = presenca.length
let frequencia = (estava/aulsa)*100
return frequencia
}
if (frequencia(presenca) >= 75){
    console.log("Aprovado")
}
else{
    console.log("Reprovado em matematica 4 kkkkk")
}   
