
class Conta {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    mostrarSaldo(): string {
        return `Titular: ${this.titular}, Saldo: R$ ${this.saldo.toFixed(2)}`;
    }
}

class ContaCorrente extends Conta {
    taxaOperacao: number;

    constructor(titular: string, saldo: number, taxaOperacao: number) {
        super(titular, saldo);
        this.taxaOperacao = taxaOperacao;
    }

    aplicarTaxa(): void {
        if (this.saldo >= this.taxaOperacao) {
            this.saldo -= this.taxaOperacao;
        } else {
            console.log("Saldo insuficiente para aplicar a taxa de operação.");
        }
    }
}

class ContaPoupanca extends Conta {
    taxaJuros: number;

    constructor(titular: string, saldo: number, taxaJuros: number) {
        super(titular, saldo);
        this.taxaJuros = taxaJuros;
    }

    calcularJuros(): void {
        const juros = this.saldo * (this.taxaJuros / 100);
        this.saldo += juros;
    }
}

const contaCorrente = new ContaCorrente("João", 1000, 20);
console.log(contaCorrente.mostrarSaldo());
contaCorrente.aplicarTaxa();
console.log(contaCorrente.mostrarSaldo());

const contaPoupanca = new ContaPoupanca("Maria", 2000, 0.5);
console.log(contaPoupanca.mostrarSaldo());

