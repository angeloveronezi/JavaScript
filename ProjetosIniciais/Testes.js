//var - Pode ser alterado;
var nome = 'Angelo Veronezi'

//let - Pode ser alterada;
// recebe numeros
let idade = 30

//const - Não pode ser alterada;
const cidade = 'Osasco'


//array é uma lista de dados;
const paises = ['Brasil', 'Argentina', 'Alemanha']
console.log(paises);
console.log(paises[0]) //acessando o índice do array

console.log("Tamanho do array: ", paises.length) //tamanho do array;

console.log("Acessando o país: " + paises[2]);

//Operações com o array:
paises.push('USA'); //adiciona no final do array

paises.pop() //Remove o último elemento do array;

paises.unshift('Itália') //Adiciona no incio do array;

paises.shift() //remove da primeira posião;

console.log(paises)
