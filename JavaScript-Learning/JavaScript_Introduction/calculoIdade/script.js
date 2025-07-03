function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Sofia',
    idade: 19,
}

const pessoa2 = {
    nome: 'João',
    idade: 17,
}

const animal1={
    nome: 'Leona',
    idade: 3,
    tipo: 'Cachorro',
    raça: 'Shih Tzu',
}

console.log(calculaIdade.call(pessoa1, 20));
console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.apply(animal1, [7]));