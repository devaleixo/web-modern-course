let numero = 1
{
    let numero = 2                      //let terá o escopo de bloco, de função e global.
    console.log('dentro =', numero)     //var terá escopo de função e global.
}
console.log('fora =', numero)