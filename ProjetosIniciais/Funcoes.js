/*
  Função = precisa chamar o bloco de código para execução;
           Pode ou não receber parâmetros;
           Pode ou não retornar dados;
*/

function gerarNome(){
    const nome = 'Angelo'
    const sobreNome = 'Veronezi'
    const idade = 30
    console.log("Nome: ", nome, ' ', sobreNome );
    console.log('Idade:', idade);
}

gerarNome()   //chama a função, sem isso o código acima não funciona;