// // const frutas = ['Banana', 'Morango', 'Uva'];
// // const frase = 'Isso é JavaScript';

// // fetch('https://pokeapi.co/api/v2/pokemon/')
// // .then(({headers}) => console.log(headers));

// const frutas = ["Banana", "Morango", "Uva"];
// const frase = "Isso é JavaScript";

// for (const fruta of frutas) {
// 	console.log(fruta);
// }

// for (const char of frase) {
// 	console.log(char);
// }

// const buttons = document.querySelectorAll("button");

// for (const btn of buttons) {
// 	btn.style.background = "blue";
// }

// console.log(...buttons);

// const carro = {
// 	marca: "Honda",
// 	ano: 2018,
// };

// for (const propriedade in carro) {
// 	console.log(propriedade);
// }

// const btn = document.querySelector("button");
// const btnStyles = getComputedStyle(btn);

// for (const style in btnStyles) {
// 	console.log(`${style}: ${btnStyles[style]}`);
// }

// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const listaItems = document.querySelectorAll("li");

for (const item of listaItems) {
	item.classList.add("ativo");
}

console.log(...listaItems);

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

console.log(window);

for (const prop in window) {
	console.log(`${prop}: ${window[prop]}`);
}