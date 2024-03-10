// Adicione a classe ativo a todos os itens do menu
const menuItens = document.querySelectorAll('.menu li');
menuItens.forEach((item) => {
	item.classList.add('ativo');
	console.log(item);
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItens.forEach((item) => {
	item.classList.remove('ativo');
});

menuItens[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
	possuiAlt = img.hasAttribute('alt');
	console.log(img, possuiAlt);
});

// Modifique o href do link externo no menu

let linkExterno = document.querySelector('a[href^="https:"]');
linkExterno.setAttribute('href', 'fmota.dev.br');
console.log(linkExterno.getAttribute('href'));
