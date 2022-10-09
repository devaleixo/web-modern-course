function tratarErroeLancar(erro) {
    throw new Error ('Nossa equipe já foi notificada sobre o erro.')
}
function imprimirNomeGritado(obj) {
    try { 
    console.log(obj.name.toUpperCase() + "!!!")
}
    catch(e) {
        tratarErroeLancar(e)
    }
}
const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)