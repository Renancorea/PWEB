const prompt = require('prompt-sync')();
const senha = "123456";
const nome = "renan";
let TentativaNome = prompt("Digite seu nome de usuario: ");
let TentativaSenha = prompt("Digite sua senha: ");
if(TentativaNome == nome && TentativaSenha == senha){
    console.log("Acesso Permitido");
}
else{
    console.log("Acesso Negado");
}