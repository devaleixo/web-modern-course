const saudacao = 'Opa'  //contexto léxico 1

function exec() {
    const saudacao = 'Falaaa'
    return saudacao
}

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 60,
    Endereço: {
        CEP:73252110,
        Rua: 'Dos Tolos',
        Numero: 0,
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)
