// classe é um molde, defini o que eu quero ter
// obejto é quando falo cria um objeto a partir desse molde
export class Cliente {
    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}