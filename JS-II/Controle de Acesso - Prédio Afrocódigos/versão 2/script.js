

//variáveis globais 

    //Retorna a hora atual do computador
    
    let data = new Date();
    let horas = data.getHours();


function acessar() {
    
    //Verificando se usuário está no cadastro   

        //cadastro dos usuarios "back end"
        const usuarios_cadastrados = [
            {nome: 'Lis', nivel_acesso: 'gerente',}, {nome: 'Tamir', nivel_acesso: 'funcionario' },
            {nome: 'Marcos', nivel_acesso: 'visitante'}, {nome: 'Ludmila', nivel_acesso: 'visitante' },
            {nome: 'Felipe', nivel_acesso: 'administrador'}, {nome: 'Deise', nivel_acesso: 'administrador' },
                ];

        //entrada dos dados
        let usuario = document.nome_usuario.elements["nome_usuario"].value; 
        let trilha = document.trilha.elements["trilha"].value;
        
        let nivel_acesso = " ";

    //declaração de variáveis
    let encontrou = false; // se econtrou o cadastro
    
    
    let horarioPermitidoInicio ;
    let horarioPermitidoFim ;


    //laço de repetição para encontrar o usuário no cadastro   

    if(trilha === "Back-End"){
        alert("Acesso Negado! Entrada apenas para a melhor trilha do afrocódigos");
    } else {

        //laço de repetição para encontrar o usuário no cadastro   
        

            for (let i = 0; i < usuarios_cadastrados.length; i++) {        
                
                if (usuarios_cadastrados[i].nome === usuario) {
                    encontrou = true;  // armazenando true caso tenha encontardo
                    nivel_acesso = usuarios_cadastrados[i].nivel_acesso; // armazenando o nivel_acesso do usuario
                    // alert("Cadastro encontrado!")
                    break;
                }          
            
            }

        //em caso não não encontrar cadastro o programa para e avisa. 
            if (encontrou === false) {
                alert("Cadastro não encontrado!")  
            }

            else {        

                // Verificar acesso do usuario	
                
                    //Visitante: 9hs as 18hs
                    if(nivel_acesso === 'visitante') {
                        horarioPermitidoInicio = 9
                        horarioPermitidoFim = 18
                    }

                    //Funcionario: 9hs as 18hs
                    else if (nivel_acesso === 'funcionario') {
                        horarioPermitidoInicio = 8
                        horarioPermitidoFim = 22 
                    }

                    //Gerente e Administrador: acesso irrestrito
                    else if (nivel_acesso === 'gerente' || nivel_acesso === 'administrador') {
                        horarioPermitidoInicio = 0
                        horarioPermitidoFim = 25
                        
                    }

                    //Verificando se está no horário permitido
                
                    if(horas >= horarioPermitidoInicio && horas < horarioPermitidoFim ) {
                        acesso = true                    
                        alert(`Seja bem vindo(a) ${usuario}! Seu acesso é de ${nivel_acesso} \nSeu horario é de ${horarioPermitidoInicio} as ${horarioPermitidoFim}`);
                    }
                    else{ alert("Acesso negado! Motivo-> Fora do horário permitido")}
        
                       
        }         
    }
}