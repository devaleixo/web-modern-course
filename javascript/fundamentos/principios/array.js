const valores = [7.7, 8.9, 7.2, 9.8]
console.log(valores[0], valores[2])
console.log(valores[5])
valores[4] = 10

console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste') //adiciona elementos ao array
console.log(valores)

console.log(valores.pop()) //remove o ultimo elemento do array e retorna ele á saida.
delete valores [0]
console.log(valores)

console.log(typeof valores)
