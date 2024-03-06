// Aula: 206. Objetos

const pessoa = { 
	// Propriedades do objeto pessoa
	nome: 'Filipe',
	idade: 22,
	peso: 77,
  naturalidade: 'brasileiro',
  
  // Método do objeto pessoa
	podeDoarSangue() {
		if (this.idade > 18 && this.peso >= 67) {
			return 'Pode doar sangue';
		} else {
			return 'Não pode doar sangue';
		}
	},
};

pessoa.genero = 'masculino'; // Adicionando uma propriedade ao objeto pessoa

console.log(pessoa.podeDoarSangue());  
