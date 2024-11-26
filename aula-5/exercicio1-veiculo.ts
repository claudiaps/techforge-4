
interface Veiculo {
    marca: string;
    modelo: string;

    acelerar(velocidade: number): void;
}


class Carro implements Veiculo {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }


    acelerar(velocidade: number): void {
        console.log(`O carro ${this.marca} ${this.modelo} acelerou para ${velocidade} km/h.`);
    }
}


class Moto implements Veiculo {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }


    acelerar(velocidade: number): void {
        console.log(`A moto ${this.marca} ${this.modelo} acelerou para ${velocidade} km/h.`);
    }
}


const carro = new Carro("Toyota", "Corolla");
carro.acelerar(120);

const moto = new Moto("Honda", "CB 500");
moto.acelerar(90);

