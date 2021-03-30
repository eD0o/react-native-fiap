function criarNovaPessoa(nome) {
    let obj = {};
    obj.nome = nome;
    obj.saudacao = function(){
        console.log(`Olá,${obj.nome}`)
    }
}

let pessoa = criarNovaPessoa("Ale")
console.log(pessoa.nome);
pessoa.saudacao();