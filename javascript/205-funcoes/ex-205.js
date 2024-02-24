// Crie uma função para verificar se um valor é Truthy

function isTruthy(valor) {
	return !!valor;
}

console.log(isTruthy(3));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
	return `O perimetro do quadrado é ${lado * 4}`;
}

console.log(perimetroQuadrado(14));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
	return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Filipe', 'Mota'));

// Crie uma função que verifica se um número é par

function isEven(numero) {
	if (numero % 2 === 0) {
		return `O número ${numero} é par`;
	} else {
		return `O número ${numero} é impar`;
	}
}

console.log(isEven(5));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado) {
	return typeof dado;
}

console.log(tipoDado(true));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

/*
  addEventListener('scroll', function () {
    console.log('Filipe Mota');
  });
*/

// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
	return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
	return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
