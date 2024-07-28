// /*
// ARRAYS
// Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.
// */

// //const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const precos = [49, 99, 69, 89];

// const dados = [
// 	new String("Tipo 1"),
// 	["Carro", "Portas", { cor: "Azul", preco: 2000 }],
// 	function andar(nome) {
// 		console.log(nome);
// 	},
// ];

// /*
// CONSTRUÇÃO DE ARRAYS
// Toda array herda os métodos e propriedades do protótipo do construtor Array.
// */

// const instrumentos = ["Guitarra", "Baixo", "Violão"];
// const carros = new Array("Corola", "Mustang", "Honda");

// carros[1]; // Mustang
// carros[2] = "Ferrari";
// carros[10] = "Parati";
// carros.length; // 11

// carros.unshift("Gol");
// carros.push("Parati");

// console.log(carros.pop());
// console.log(carros.reverse());

// const carros = ["Ford", "Fiat", "VW", "Honda"];
// carros.splice(1, 0, "Kia", "Mustang");
// console.log(carros);
// carros.splice(3, 2, "Ferrari");
// console.log(carros);

// const arrayWith = ["Item1", "Item2", "Item3", "Item4", "Item5"];

// console.log(arrayWith.copyWithin(2, 0, 2));

// console.log([1, 2, 3, 4, 5].fill("Item", 0, 2));

// const transporte1 = ["Barco", "Avião"];
// const transporte2 = ["Carro", "Moto"];

// const transportes = transporte1.concat(transporte2);
// console.log(transportes);

// const maisTransportes = [].concat(transporte1, transporte2, "Van");
// console.log(maisTransportes);

// console.log(linguagens.includes("css")); // true
// console.log(linguagens.includes("ruby")); // false
// console.log(linguagens.indexOf("python")); // 4
// console.log(linguagens.indexOf("js")); // 2
// console.log(linguagens.lastIndexOf("js")); // 5

// const htmlString = "<h2>Título Principal</h2>";
// const htmlArray = htmlString.split("h2");
// const novoHtml = htmlArray.join("h1");
// console.log(novoHtml);

// const frutasArray = ["Banana", "Melancia", "Laranja"];

// frutasArray.forEach((fruta, index) => {
// 	console.log(`${fruta} sua posição é: ${index + 1}`);
// });

const linguagens = ["html", "css", "js", "php", "python"];

const cloneLinguagens = linguagens.slice(2);
console.log(cloneLinguagens);
