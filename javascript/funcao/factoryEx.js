var descount = 10 / 100
function criarProduto(nome, preço) {
  return {
    nome,
    preço,
    desconto: 0.1
  }
}
console.log(criarProduto('iPhone', '4000'))
console.log(criarProduto('Tablet', '2500'))
console.log(criarProduto('Macbook', '20000'))
