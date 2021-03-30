let pessoa = {
    nome: "Mário",
    sobrenome: "de Andrade",
    id: 5566,
    nomeCompleto: function(){
        return this.nome + "" + this.sobrenome;
    }
};

console.log(pessoa,pessoa.nome)
console.log(pessoa.nomeCompleto())