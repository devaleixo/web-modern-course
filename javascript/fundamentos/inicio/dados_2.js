// a variável tem como regra o let ou var- para defini-la o nome- para identificala e o valor- para quantifica-la
let preco= 19.9;
var desconto= 0.4;
console.log (preco * 0.6);
let PrecoComDesconto = preco * (1-desconto);
console.log(PrecoComDesconto);

let nome= "caderno"; // --> String (texto) -> Sequência de Símbolos 
let categoria= "papelaria";
var desconto= "40%";
console.log ("Produto: " + nome
+ ", Categoria: " + categoria
+", Valor: " + preco
+ ", Desconto: " + desconto);