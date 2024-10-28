import { enviarMensagem } from "./script2.js";

export function exibirMensagemEnviada(mensagem) {
	if (!mensagem) {
		return "A mensagem não foi informada!";
	}

	return `Essa foi a mensagem enviada: ${mensagem}`;
}

console.log(enviarMensagem("Olá, estou com saudades de você :/"));
