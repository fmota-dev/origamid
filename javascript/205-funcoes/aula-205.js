const totalPaises = 193;

function faltaVisitar(paisesVisitados) {
	return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(20));
console.log(totalPaises);
