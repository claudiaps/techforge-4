
interface MeioDePagamento {
    autorizar(valor: number): boolean;
    processarPagamento(valor: number): void;
}

class CartaoDeCredito implements MeioDePagamento {
    saldoDisponivel: number;

    constructor(saldoDisponivel: number) {
        this.saldoDisponivel = saldoDisponivel;
    }

    autorizar(valor: number): boolean {
        return this.saldoDisponivel >= valor;
    }

    processarPagamento(valor: number): void {
        if (this.autorizar(valor)) {
            this.saldoDisponivel -= valor;
            console.log(`Pagamento de R$ ${valor.toFixed(2)} realizado com sucesso no cartão de crédito. Saldo disponível: R$ ${this.saldoDisponivel.toFixed(2)}.`);
        } else {
            console.log("Pagamento não autorizado: saldo insuficiente no cartão de crédito.");
        }
    }
}

class PayPal implements MeioDePagamento {
    limiteTransacoesDiarias: number;
    transacoesRealizadas: number;

    constructor(limiteTransacoesDiarias: number) {
        this.limiteTransacoesDiarias = limiteTransacoesDiarias;
        this.transacoesRealizadas = 0;
    }

    autorizar(valor: number): boolean {
        return this.transacoesRealizadas < this.limiteTransacoesDiarias;
    }

    processarPagamento(valor: number): void {
        if (this.autorizar(valor)) {
            this.transacoesRealizadas++;
            console.log(`Pagamento de R$ ${valor.toFixed(2)} realizado com sucesso via PayPal. Transações realizadas hoje: ${this.transacoesRealizadas}.`);
        } else {
            console.log("Pagamento não autorizado: limite diário de transações atingido no PayPal.");
        }
    }
}


const cartao = new CartaoDeCredito(1000);
cartao.processarPagamento(300);
cartao.processarPagamento(800);

const paypal = new PayPal(3);
paypal.processarPagamento(50);
paypal.processarPagamento(75);
paypal.processarPagamento(25);
paypal.processarPagamento(100);
