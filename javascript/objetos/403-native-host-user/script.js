/*NATIVE
Objetos nativos são aqueles definidos na especificação da linguagem e são implementados independente do host.*/

// Construtores de objetos nativos
Object
String
Array
Function

/*HOST
Objetos do host são aqueles implementados pelo próprio ambiente. Por exemplo no browser possuímos objetos do DOM, como DomList, HTMLCollection e outros. Em Node.js os objetos do Host são diferentes, já que não estamos em um ambiente do browser.
*/ 

NodeList
HTMLCollection
Element

/*USER
Objetos do user, são os objetos definidos pelo seu aplicativo. Ou seja, qualquer objeto que você criar ou que importar de alguma biblioteca externa.
*/

const Pessoa = {
  nome: 'André'
}

/* API
Application Programming Interface, é uma interface de software criada para a interação com outros softwares. Ou seja, toda interação que fazemos com o browser utilizando Objetos, Métodos e Propriedades, estamos na verdade interagindo com a API do browser. 
*/

// Liste 5 objetos nativos
Object
String
Array
Function
Number
// Liste 5 objetos do browser
Window
Document
NodeList
HTMLCollection
Element
// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox