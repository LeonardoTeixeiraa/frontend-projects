//Faça um programa que receba o salário base de um funcionário.
//Calcule e mostre o salário a receber, sabendo que esse funcionário tem gratificação
//de R$ 50,00 e paga imposto de 10% sobre o salário base

let salarioBase = 1000.0;
let imposto = 0.9;
let gratificacao = 50.0;

let salarioFinal = salarioBase * imposto + gratificacao;

console.log("O salário final é: " + salarioFinal);
