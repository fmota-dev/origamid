// String

var nome = 'Filipe';

nome.length; // 5
nome.charAt(1); // 'i'
nome.replace('Fi', 'Fe'); // 'Felipe'
nome; // 'Filipe'


// Números
var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'

// funções
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1

// Elementos do DOM
var btn = document.querySelector('.btn');

btn.classList.add('azul'); // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function () {
	console.log('Clicou');
});