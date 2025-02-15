// function createButton(text) {
// 	const element = () => {
// 		const buttonElement = document.createElement("button");
// 		buttonElement.innerText = text;
// 		return buttonElement;
// 	};

// 	return {
// 		text,
// 		element,
// 	};
// }

// const btnComprar = createButton("Comprar");
// const btnVender = createButton("Vender");

// console.log(btnComprar, btnVender);

function Pessoa(nome) {
	if (!(this instanceof Pessoa)) {
		return new Pessoa(nome);
	}
	this.nome = nome;
}

Pessoa.prototype.andar = function () {
	return `${this.nome} andou`;
};

const designer = Pessoa("Filipe");
console.log(designer);
