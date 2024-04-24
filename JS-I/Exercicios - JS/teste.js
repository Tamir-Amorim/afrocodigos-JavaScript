const prompt = require("prompt-sync")();


//entrada dos dados Array de objetos

const produtos = [
    { nome: "Produto A", preco: 10 },
    { nome: "Produto B", preco:  5 },
    { nome: "Produto C", preco: 15 },
    { nome: "Produto D", preco: 7 },
   ];
   
//declaração de variáveis
   let novaArray = []
   let guardaMenor = 0
   let menor = 10000   

//loop para varrer a array, comparando
for(let i in produtos) {
    for(let j in produtos) {
        
        //condicional que armazena o preço menor e impede que seja armazenado o mesmo valor novamente. 
        if(produtos[j].preco <= menor && produtos[j].preco > guardaMenor){                 
        menor = produtos[j].preco;
        guardaIndice = j; 

        }
    
    } 
    //após verificar qual valor menor, armazena em uma nova array. 
    novaArray.push(produtos[guardaIndice]);
    guardaMenor = menor;
    menor = 1000;


}
    console.log(novaArray)

