// Pode ser feito com classe abstrata, interface ou classe comum
abstract class Login {
    abstract autenticar(): boolean;
}

class EmailLogin extends Login {
    private email: string;
    private senha: string;

    // Dados fictícios de validação
    private emailCorreto = "usuario@exemplo.com";
    private senhaCorreta = "123456";

    constructor(email: string, senha: string) {
        super();
        this.email = email;
        this.senha = senha;
    }

    autenticar(): boolean {
        return this.email === this.emailCorreto && this.senha === this.senhaCorreta;
    }
}

class SocialLogin extends Login {
    private tokenRedeSocial: string;

    // Dados fictícios de validação
    private tokenValido = "token123";

    constructor(tokenRedeSocial: string) {
        super();
        this.tokenRedeSocial = tokenRedeSocial;
    }

    autenticar(): boolean {
        return this.tokenRedeSocial === this.tokenValido;
    }
}

class TwoFactorLogin extends Login {
    private senha: string;
    private codigo: number;

    // Dados fictícios de validação
    private senhaCorreta = "abcdef";
    private codigoCorreto = 123456;

    constructor(senha: string, codigo: number) {
        super();
        this.senha = senha;
        this.codigo = codigo;
    }


    autenticar(): boolean {
        return this.senha === this.senhaCorreta && this.codigo === this.codigoCorreto;
    }
}


// Teste com EmailLogin
const emailLogin = new EmailLogin("usuario@exemplo.com", "123456");
console.log(`Login por email: ${emailLogin.autenticar()}`);

// Teste com SocialLogin
const socialLogin = new SocialLogin("token123");
console.log(`Login por rede social: ${socialLogin.autenticar()}`);

// Teste com TwoFactorLogin
const twoFactorLogin = new TwoFactorLogin("abcdef", 123456);
console.log(`Login com autenticação de dois fatores: ${twoFactorLogin.autenticar()}`);


// Teste de falha
const failedLogin = new TwoFactorLogin("errada", 111111);

