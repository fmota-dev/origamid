if (possuiGraduacao) {
	console.log('Possui graduação');
} else {
	console.log('Não possui graduação');
}
// retorna Possui Graduação e não executa o else


var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado