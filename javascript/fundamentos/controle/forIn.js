const notas = [6.7, 7.4, 6.9, 7.2, 8.3]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    Nome: 'Rebeca',
    Idade: '25',
    Tipo: 'construtora',
    Peso: '59',
    Altura: '1.60m'
}
for(let atributo in pessoa) {
    console.log (`${atributo} = ${pessoa[atributo]}`)
}