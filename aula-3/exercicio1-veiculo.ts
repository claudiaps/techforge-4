
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
        // chama o construtor da classe pai
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    buzinar(): string {
        return 'Bip Bip!';
    }
}


const minhaMoto = new Moto('Honda', 'CG 160', 160);
console.log(minhaMoto.detalhes());
console.log(minhaMoto.buzinar());
