// O JavaScript é fracamente tipada, ou seja, aceita muitas coisas que não são padrão
console.log("Trabalhando com atribuição de variáveis");

// Variáveis são qualquer coisa que guardamos na memória
// const é uma variável constante, uma vez declarada ela não muda
const idade = 24;
/* let primeiroNome = "Tharlys"; // é uma variável de fato, ela pode ser alterada */
// Mudança de estado na programação é uma coisa dificil de debugar
// Sempre manter uma constante...
const primeiroNome = "Tharlys";
const sobreNome = "Dias";

// console.log(primeiroNome + " " + sobreNome);
console.log(primeiroNome, sobreNome);
console.log(`Meu nome é ${primeiroNome} ${sobreNome}`); // Interpolação de variáveis "${}"

const nomeCompleto = primeiroNome + sobreNome; // const é quando eu declaro variáveis que não variam
/* primeiroNome = 2; // Isso não é uma boa prática, porque uma vez declada uma variável
// do tipo texto ela não "deveria" ser alterada para tipo número. */
console.log(nomeCompleto);
// nomeCompleto = 2; === mão funciona

let contador = 0; // let é quando eu declaro variáveis que realmente variam
contador = contador + 1

let idadeRicardo; // declarando variável
idadeRicardo = 26; // atribuindo valor
idadeRicardo = idadeRicardo + 1;
console.log(idadeRicardo);