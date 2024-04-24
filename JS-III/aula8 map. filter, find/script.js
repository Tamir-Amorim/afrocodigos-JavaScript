//Dado uma lista de uma Loja que revende também produtos orgânicos de produtores rurais:

// Lista de participantes 
let participantes = [ { tipo: "loja", nome: "Orgânico Mais Verde", produtos: { alface: 50, tomate: 30, cenoura: 40 } }, 
{ tipo: "loja", nome: "EcoFarm", produtos: { maçã: 20, laranja: 15, abóbora: 10 } },
{ tipo: "loja", nome: "Verde Vida", produtos: { banana: 25, morango: 35, couve: 20 } },
{ tipo: "produtor", nome: "Fazenda Sol Nascente", produtos: { alface: 30, tomate: 50, cenoura: 20 } },
{ tipo: "produtor", nome: "Sítio Amor Perfeito", produtos: { maça: 15, laranja: 25, abóbora: 30 } },
{ tipo: "produtor", nome: "Chácara Doce Sabor", produtos: { banana: 40, morango: 30, couve: 25 } } ];


listaProdutor = []
let totalMacas = 0;
let totalLaranjas = 0;

for ( i = 0; i <participantes.length; i++) {
    if (participantes[i].tipo === "produtor"){
    listaProdutor.push(participantes[i])
    }
}

for ( i = 0; i <listaProdutor.length;i++) {

   maca += parseint(listaProdutor[i].produtos.maça)
   laranja += parseInt(listaProdutor[i].produtos.laranja)
}

console.log(`Total de maçãs fornecidas pelos produtores: ${totalMacas}`);
console.log(`Total de laranjas fornecidas pelos produtores: ${totalLaranjas}`);



//Calcule o valor total apenas das maçãs e laranja do tipo produtor.

//O valor final deverá ser imprimido.

// Exibir o total de maçãs e laranjas fornecidas pelos produtores console.log(`Total de maçãs fornecidas pelos produtores: ${totalMacas}`);
// console.log(`Total de laranjas fornecidas pelos produtores: ${totalLaranjas}`);