const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.875
const avaliacao2 = 6.548

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const notafinal = total / (peso1 + peso2)
console.log(notafinal.toFixed(2))   //tofixed: Para limitar o número de casas
console.log(notafinal.toString())   //tostring: Para mostrar o valor inteiro
console.log(typeof notafinal) //typeof: Para mostrar a função da palavra
console.log(typeof Number)
console.log(peso2)