
interface Funcionario {
    nome: string;
    cargo: string;
    salario: number;

    trabalhar(): void;
}

interface Gerente extends Funcionario {
    supervisionar(): void;
}

class FuncionarioComum implements Funcionario {
    nome: string;
    cargo: string;
    salario: number;

    constructor(nome: string, cargo: string, salario: number) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    trabalhar(): void {
        console.log(`${this.nome} está desempenhando suas tarefas como ${this.cargo}.`);
    }
}

class GerenteDeProjetos implements Gerente {
    nome: string;
    cargo: string;
    salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.cargo = "Gerente de Projetos";
        this.salario = salario;
    }

    trabalhar(): void {
        console.log(`${this.nome} está gerenciando o projeto.`);
    }

    supervisionar(): void {
        console.log(`${this.nome} está supervisionando a equipe.`);
    }
}

const funcionarios: Funcionario[] = [
    new FuncionarioComum("Ana", "Desenvolvedora", 4000),
    new FuncionarioComum("Carlos", "Analista de QA", 3500),
    new GerenteDeProjetos("Beatriz", 7000),
];

// percorre o array de funcionarios
funcionarios.forEach(funcionario => {
    funcionario.trabalhar();
    // verifica se o funcionário é uma instancia da interface Gerente
    if (funcionario instanceof Gerente) {
        funcionario.supervisionar();
    }
})
