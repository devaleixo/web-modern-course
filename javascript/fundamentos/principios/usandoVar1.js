{
    {
        {
            { var sera = 'Será???'}
        }
    }
}
console.log(sera) //a variável var é visível mesmo fora do bloco.

function teste() {
    var local = 123
    console.log(local)  //quando uma variável é definida dentro de uma função, não poderá ser acessada fora da função
}
teste()
