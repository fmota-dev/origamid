// Verifique a distância da primeira imagem
// em relação ao topo da página

let primeiraImagem = document.querySelector('img');
let distanciaTopo = primeiraImagem.offsetTop;

// Retorne a soma da largura de todas as imagensconst
let imagens = document.querySelectorAll('img');
let somaLargura = 0;
imagens.forEach((imagem) => {
	let larguraImagem = imagem.offsetWidth;
	somaLargura += larguraImagem;
});
console.log('Soma total das larguras:', somaLargura);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

let links = document.querySelectorAll('a');
links.forEach((link) => {
	if (link.offsetWidth >= 48 && link.offsetHeight >= 48) {
		console.log(link, 'Possui boa acessibilidade');
	} else {
		console.log(link, 'Não possui boa acessibilidade');
	}
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(width <= 720px)').matches;
if (browserSmall) {
	let menu = document.querySelector('.menu');
	menu.classList.add('menu-mobile');
}
