console.log(`Trabalhando com listas`);

/* const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

console.log("Destinos possíveis:");
console.log(salvador, saoPaulo, rioDeJaneiro); */

// Array
const listaDeDestinos = new Array( // new é uma palavra reservada do JS
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDestinos.push(`Curitiba`); // adicionando um item na lista

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); // excluir um item da minha lista
console.log(listaDeDestinos);


console.log(listaDeDestinos[1], listaDeDestinos[0]); // acessar um único nome dentro da minha lista

