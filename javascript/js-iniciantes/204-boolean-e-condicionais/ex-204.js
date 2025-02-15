// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
if (22 > idade) {
  console.log('É maior');
} else if (22 === idade) { 
  console.log('É igual');
} else { 
  console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - ' ' && 5 - 2;
console.log(expressao); // 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Filipe';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
totalHabitantes = brasil > china ? 'Brasil tem mais habitantes' : 'Brasil tem menos habitantes';
console.log(totalHabitantes);

// O que irá aparecer no console?
if ('Gato' === 'gato' && 5 > 2) {
	console.log('Verdadeiro');
} else {
	console.log('Falso');
}
// Falso

// O que irá aparecer no console?
if ('Gato' === 'gato' || 5 > 2) {
	console.log('Gato' && 'Cão');
} else {
	console.log('Falso');
}
// Cão
