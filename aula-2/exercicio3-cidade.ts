// - Crie uma classe Cidade com os atributos nome (string), população (number), área (number) e ano de fundação (number).
//  Adicione um método para calcular a densidade populacional (população / área), 
//  e outro método para calcular a idade da cidade. A classe deve estar encapsulada

class Cidade {
    private nome: string;
    private populacao: number;
    private area: number;
    private anoFundacao: number

    constructor(nome: string, populacao: number, area: number, anoFundacao: number) {
        this.nome = nome
        this.populacao = populacao
        this.area = area
        this.anoFundacao = anoFundacao
    }

    public setNome(nome: string) {
        this.nome = nome
    }

    public setPopulacao(populacao: number) {
        this.populacao = populacao
    }

    public setArea(area: number) {
        this.area = area
    }

    public setAnoFundacao(anoFundacao: number) {
        this.anoFundacao = anoFundacao
    }

    public getNome() {
        return this.nome
    }

    public getPopulacao() {
        return this.populacao
    }

    public getArea() {
        return this.area
    }

    public getAnoFundacao() {
        return this.anoFundacao
    }

    public densidadePopulacional() {
        return this.populacao / this.area
    }

    public idadeCidade() {
        const anoAtual = new Date().getFullYear()
        return anoAtual - this.anoFundacao
    }

}