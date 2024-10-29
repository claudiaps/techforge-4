// 2 - Crie uma classe Retangulo com os atributos largura (number) e altura (number). 
// Adicione métodos para calcular a área, o perímetro, e exibir as informações do retângulo.
// A classe deve estar encapsulada

class Retangulo {
    private largura: number;
    private altura: number;

    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }

    public getLargura() {
        return this.largura
    }

    public getAltura() {
        return this.altura
    }

    public setLargura(largura: number) {
        this.largura = largura
    }

    public setAltura(largura: number) {
        this.largura = largura
    }

    public area() {
        return this.largura * this.altura
    }

    public perimetro() {
        return (this.largura * 2) + (this.altura * 2)
    }
}