function getInteiroAleatiorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
do {
    opcao = getInteiroAleatiorioEntre(-1, 10)
    console.log(`Opção escolhinda foi ${opcao}`)
}while (opcao != -1)
console.log('Até a Próxima')