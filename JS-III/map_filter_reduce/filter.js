/*O filter() permite remover elementos que não se encaixam em determinados critérios.
É incrivelmente útil para desmontar grandes arrays, para que possamos escolher apenas os itens que queremos.
____________________________
Imagine que queremos filtrar somente as informações da Diretora.  
Podemos usar .filter () para retornar apenas a condição que se encaixa na função correta.*/

//Dado uma lista de colaboradores, filte somente a funcao == "Diretora".

const colaboradores =
  [{ PrimeiroNome: 'Ana', ultimoNo: 'Bouley', funcao: 'Desenvolvedora' },
  { PrimeiroNome: 'Chloe', ultimoNome: 'Alnaji', funcao: 'Desenvolvedora' },
  { PrimeiroNome: 'Jonathan', ultimoNome: 'Alves', funcao: 'Publicitário' },
  { PrimeiroNome: 'Micaela', ultimoNome: 'Herman', funcao: 'Lead Instructor' },
  { PrimeiroNome: 'Robert', ultimoNome: 'Santos', funcao: 'Desenvolvedora' },
  { PrimeiroNome: 'Wes', ultimoNome: 'Correia', funcao: 'Instrutor' },
  { PrimeiroNome: 'Hanna', ultimoNome: 'Montana', funcao: 'Diretora' }];

  let apenasDiretora = colaboradores.filter(filtrarFuncao => filtrarFuncao.funcao === 'Diretora')
  console.log(apenasDiretora);

  // 2) Criar nova array somente com profissionais da área de TI
const pessoas = [
    { nome: "Mell", area: "TI", profissao: "dev" },
    { nome: "Munique", area: "ciência", profissao: "pesquisadora"},
    { nome: "Melissa", area: "construção", profissao: "engenheira"},
    { nome: "Madalena", area: "TI", profissao: "infra" },
    { nome: "Monica", area: "medicina", profissao: "cardiologista"},
  ];
  
 let apenasTI = pessoas.filter(filtrar => filtrar.area === "TI")
 console.log(apenasTI);