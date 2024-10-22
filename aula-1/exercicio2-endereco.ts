type Endereco = {
    rua: string;
    numero: number;
    cidade: string;
}

function enderecoInfo(endereco: Endereco) {
    return (`Rua: ${endereco.rua}, número: ${endereco.numero}, Cidade: ${endereco.cidade}`);
}

const enderecoFormatado = enderecoInfo({ rua: "Sao Paulo", cidade: "Campo Mourão", numero: 123 })
console.log(enderecoFormatado)