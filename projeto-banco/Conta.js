export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }


    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() { // acessor do tipo get
        return this._cliente;
    }

    get saldo() { // acessar é sempre público
        return this._saldo;
    }


    sacar(valor) { // operação

        let taxa = 1;
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

    depositar(valor) { // metodo é como manipulo as propriedades e atributos da classe
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}