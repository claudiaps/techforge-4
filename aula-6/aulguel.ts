interface Veiculo {
    placa: string;
    modelo: string;
    ano: number;
    valorDiaria: number;

    obterInformacoes(): string;
    calcularValorAluguel(dias: number, extra?: number): number;
}


class Carro implements Veiculo {
    placa: string;
    modelo: string;
    ano: number;
    valorDiaria: number;
    quantidadePassageiros: number;

    constructor(placa: string, modelo: string, ano: number, valorDiaria: number, quantidadePassageiros: number) {
        this.placa = placa;
        this.modelo = modelo;
        this.ano = ano;
        this.valorDiaria = valorDiaria;
        this.quantidadePassageiros = quantidadePassageiros;
    }

    obterInformacoes(): string {
        return `Carro: ${this.modelo}, Ano: ${this.ano}, Placa: ${this.placa}, Passageiros: ${this.quantidadePassageiros}`;
    }

    calcularValorAluguel(dias: number): number {
        return this.valorDiaria * dias;
    }
}


class Caminhao implements Veiculo {
    placa: string;
    modelo: string;
    ano: number;
    valorDiaria: number;
    taxaExtraPorTonelada: number;

    constructor(placa: string, modelo: string, ano: number, valorDiaria: number, taxaExtraPorTonelada: number) {
        this.placa = placa;
        this.modelo = modelo;
        this.ano = ano;
        this.valorDiaria = valorDiaria;
        this.taxaExtraPorTonelada = taxaExtraPorTonelada;
    }

    obterInformacoes(): string {
        return `Caminhão: ${this.modelo}, Ano: ${this.ano}, Placa: ${this.placa}, Taxa Extra/Tonelada: ${this.taxaExtraPorTonelada}`;
    }

    calcularValorAluguel(dias: number, toneladas: number): number {
        return this.valorDiaria * dias + this.taxaExtraPorTonelada * toneladas;
    }
}


class AluguelService {
    private historicoAlugueis: { veiculo: Veiculo; valor: number }[] = [];

    alugarVeiculo(veiculo: Veiculo, dias: number, extra?: number): void {
        const valorAluguel = veiculo.calcularValorAluguel(dias, extra);
        this.historicoAlugueis.push({ veiculo, valor: valorAluguel });
        console.log(`Veículo alugado: ${veiculo.obterInformacoes()} | Valor do aluguel: R$${valorAluguel}`);
    }

    calcularCustoTotal(): number {
        return this.historicoAlugueis.reduce((total, aluguel) => total + aluguel.valor, 0);
    }

    verHistorico(): void {
        console.log("Histórico de veículos alugados:");
        this.historicoAlugueis.forEach((aluguel, index) => {
            console.log(
                `${index + 1}. ${aluguel.veiculo.obterInformacoes()} - Valor: R$${aluguel.valor}`
            );
        });
    }
}

const carro1 = new Carro("ABC1234", "Sedan", 2020, 100, 5);
const caminhao1 = new Caminhao("XYZ5678", "Truck", 2018, 300, 50);

const aluguelService = new AluguelService();

aluguelService.alugarVeiculo(carro1, 3);
aluguelService.alugarVeiculo(caminhao1, 2, 10);

console.log("Custo total de todos os aluguéis:", aluguelService.calcularCustoTotal());

aluguelService.verHistorico();
