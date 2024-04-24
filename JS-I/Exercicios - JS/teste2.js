const prompt = require("prompt-sync")();



const produtos = [
    { nome: "Produto A", preco: 10 },
    { nome: "Produto B", preco: 5 },
    { nome: "Produto C", preco: 15 },
    { nome: "Produto D", preco: 7 },
   ];
   

   //testando uma ordenação simples -> ordem crescente



// caso seja ordem crescente maior -> 0  e guardaMaior -> 10000 // em  caso de decreceste inverter // maior -> 10000 e guardaMaior -> 0
let maior = 100000;
let guardaMaior = 0;

console.log(produtos.preco[0])

let tamanhoListaPreco = produtos.length.preco;
let listaPreco = produtos.preco;
let preco = parseInt(produtos.preco);

let novaArray = []

for (let i= 0; i < tamanhoListaPreco; i++) {

    for(let j=0; j < tamanhoListaPreco; j++) {

        if(listaPreco[j] <= maior && listaPreco[j] > guardaMaior){
            
            maior = listaPreco[j];              

            console.log(maior)

        }         
    }
    
    // novaArray.push(maior); 
    // guardaMaior = maior;
    // maior = 10000;

}
// console.log("-----------------")
// console.log(novaArray)