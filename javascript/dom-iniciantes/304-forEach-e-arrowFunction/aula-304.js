// imgs.forEach(function (item) {
// 	console.log(item);
// });

// imgs.forEach(function (valorAtual, index, array) {
// 	console.log(item); // o item atual no loop
// 	console.log(index); // o número do index
// 	console.log(array); // a Array completa
// });

// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// titulosArray.forEach(function (item) {
// 	console.log(item);
// });

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
	console.log(item, index);
});
