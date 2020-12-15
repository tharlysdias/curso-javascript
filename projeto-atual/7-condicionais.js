console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false; // booleano
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

/* if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1); // removendo item
} else {
    // A pessoa é menor de idade
    if (estaAcompanhada) {
        console.log("Comprador está acompanhado!");
        listaDeDestinos.splice(1, 1);

    } else {
        console.log("Comprador não é maior de idade e não está acompanhado, não posso vender!");
    }
} */


if (idadeComprador >= 18 || estaAcompanhada == true) { // concatenar (|| == ou) operações logicas
    console.log("Boa viagem!!");
    listaDeDestinos.splice(2, 1); // removendo item
} else {
    console.log("Comprador não é maior de idade e não está acompanhado, não posso vender!");
}

console.log("Embarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada) { // && == e
    console.log("Boa viagem!!");
} else {
    console.log("Você não pode embarcar!")
}

console.log(listaDeDestinos);

/* console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);
console.log(idadeComprador === 18); */
