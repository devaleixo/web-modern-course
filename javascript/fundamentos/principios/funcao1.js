//funcao sem retorno
function imprimirsoma(a, b){
    console.log(a + b)
}

imprimirsoma(2, 3)
imprimirsoma(2)
imprimirsoma(2, 3, 4, 5, 6, 7)
imprimirsoma()

//funcao com retorno

function soma(a, b = 1){
    return a + b
}

console.log(soma(5,1))
console.log(soma(1))
console.log(soma())

