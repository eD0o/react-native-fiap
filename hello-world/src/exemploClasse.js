class Pessoa {
    constructor(nome){
        this._nome = nome;
    }

    get nome(){
        return this._nome;
    }

    static qualClasseSou(){
        console.log("Sou da classe Pessoa")
    }
}

let pessoa = new Pessoa("Edu");
console.log(pessoa.nome)

console.log(pessoa.nome);