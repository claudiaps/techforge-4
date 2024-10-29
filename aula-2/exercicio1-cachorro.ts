// 1 - Crie uma classe Cachorro com os atributos nome (string), raça (string) e idade (number). 
// Adicione um método que calcule a idade do cachorro em "anos de cachorro" (1 ano humano = 7 anos de cachorro).

class Cachorro {
    private nome: string;
    private raca: string;
    private idade: number;

    constructor(nome: string, raca: string, idade: number) {
        this.nome = nome
        this.raca = raca
        this.idade = idade
    }

    public idadeCachorro() {
        const idadeCachorro = this.idade * 7
        console.log("A idade do cachorro em anos humanos é: ", this.idade)
    }

}