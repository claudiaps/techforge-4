
class FormaGeometrica {
    calcularArea(): number {
        throw new Error("Este método deve ser sobrescrito nas classes derivadas.");
    }
}

class Quadrado extends FormaGeometrica {
    lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}

class Circulo extends FormaGeometrica {
    raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}

const quadrado = new Quadrado(4);
console.log(`Área do quadrado: ${quadrado.calcularArea()} unidades quadradas`);

const circulo = new Circulo(3);
console.log(`Área do círculo: ${circulo.calcularArea().toFixed(2)} unidades quadradas`);
