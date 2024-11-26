
class Funcionario {
    nome: string;
    salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    mostrarSalario(): string {
        return `Funcionário: ${this.nome}, Salário: R$ ${this.salario.toFixed(2)}`;
    }
}

class Gerente extends Funcionario {

    calcularBonus(): string {
        const bonus = this.salario * 3; // Calcula o bônus
        return `Funcionário: ${this.nome}, Bônus: R$ ${bonus.toFixed(2)}`;
    }
}

const funcionario = new Funcionario('Carlos', 5000);
console.log(funcionario.mostrarSalario());

const gerente = new Gerente('Ana', 7000);
console.log(gerente.mostrarSalario());
console.log(gerente.calcularBonus());

