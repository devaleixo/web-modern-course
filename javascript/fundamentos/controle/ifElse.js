const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    
    } else {(nota <= 6)
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa') //Problema de tipagem fraca