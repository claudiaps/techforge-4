class Veiculo {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    detalhes(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }
}

class Moto extends Veiculo {
    cilindradas: number;

    constructor(marca: string, modelo: string, cilindradas: number) {
        super(marca, modelo); // Chama o construtor da classe base
        this.cilindradas = cilindradas;
    }

    // Sobrescreve o método 'detalhes' para incluir o número de cilindradas
    detalhes(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Cilindradas: ${this.cilindradas}cc`;
    }
}

const veiculo = new Veiculo("Toyota", "Corolla");
console.log(veiculo.detalhes());

const moto = new Moto("Honda", "CBR", 500);
console.log(moto.detalhes());
