const btnSubmit = document.querySelector(".btn-submit");
const input = document.querySelector(".input");
const resultado = document.querySelector(".resultado");

// CODIGO RODANDO TENDO DE ALTERAR NA VARIAVEL O VALOR DO CPF
let cpf = `705.484.450-52`

let cpfLimpo = cpf.replace(/\D+/g, "");
// cpfLimpo ainda é string aqui

cpfArray = Array.from(cpfLimpo);
// cpf Array já é número aqui e pode fazer contas;

cpfSliced = cpfArray.slice(0,-2);
//Aqui estou excluindo os dois ultimos digitos do array
let contador = 10
let somaTotal1 = cpfSliced.reduce((ac, val) => ac + Number(val*contador--), 0)
//console.log(cpfSliced.reduce((ac, val) => ac + Number(val*contador--), 0));
let primeiroDigito = 11 - (somaTotal1 % 11);
if (primeiroDigito>9){
    primeiroDigito = 0;
}
primeiroDigitoString = primeiroDigito.toString();

cpfSliced.push(primeiroDigito.toString());
contador = 11;

let somaTotal2 = cpfSliced.reduce((ac, val) => ac + Number(val*contador--), 0);
let segundoDigito = 11 - (somaTotal2 % 11);
if (segundoDigito>9){
    segundoDigito = 0;
}
// para deixar todo os elementos do array em string e fazer a comparaçao
cpfSliced.push(segundoDigito.toString());
// fazer um looping comparando cada indice dos dois arrays, se forem iguais, entao é cpf valido
let i = 0;
let validacao = false;
for(let valor of cpfArray){
    if (valor === cpfSliced[i]){
        validacao = true;
        i++;
    }else{
        validacao = false;
        break;
    }
}
if (validacao === true){
    console.log("CPF VÁLIDO");
}else if (validacao !== true){
    console.log("CPF INVÁLIDO");
}
// MESMO ENVIANDO UMA LETRA AO INVES DE NUMERO NO CPF, O CODIGO ESTÁ FUNCIONANDO---------
// AGORA TENTAR PEGAR UM INPUT NO HTML E TRANSFORMAR EM ALGO DINAMICO