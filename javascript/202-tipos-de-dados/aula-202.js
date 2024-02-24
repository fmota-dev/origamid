var nome = 'Filipe'; // String
var idade = 22; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var novoObjeto = {}; // Object

console.log(typeof nome);

var sobrenome = 'Mota';

var nomeCompleto = nome + ' ' + sobrenome;

'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
// "JavaScript é "super" fácil"; == Inválido;

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
