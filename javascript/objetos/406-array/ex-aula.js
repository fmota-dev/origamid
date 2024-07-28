const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiroValor = comidas.shift();
// Remova o último valor de comidas e coloque em uma variável
const ultimoValor = comidas.pop();
// Adicione 'Arroz' ao final da array
comidas.push("Arroz");
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift("Peixe", "Batata");

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
const estudantesOrdenados = estudantes.sort();
// Inverta a ordem dos estudantes
estudantes.reverse();
// Verifique se Joana faz parte dos estudantes
if (estudantes.includes("Joana")) {
	console.log("Possui");
}
// Verifique se Juliana faz parte dos estudantes
if (estudantes.includes("Juliana")) {
	console.log("Possui");
}

const html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;

// Substitua section por ul e div com li,
// utilizando split e join em uma só linha

const novoHtml = html.split("section").join("ul").split("div").join("li");

console.log(novoHtml);

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const cloneCarros = carros.slice();
carros.pop()

console.log(carros)
console.log(cloneCarros);

