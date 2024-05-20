
/*
  Exercicio 1 - Estrutura de repetição;

  Percorrer um lista de nomes, contendo:
  Eduardo, Maria, Fernando, Joao e Francisco;
  Número da execução, começando em 1
  Nome que está sendo executado
  Separadores

  Exemplo Saída:
   Execução: 1
   Nome: Eduardo
   ---------------
*/ 

const nomes = ['Eduardo', 'Maria', 'Fernando', 'João', 'Francisco'];

//for(let indice = 0; indice < 10; indice++){
for (let indice = 0; indice < nomes.length; indice ++){
    console.log('----------------------------------');
    console.log('Execução: ' + (indice + 1));
    console.log('Nome: ' + nomes[indice]);
}
console.log('----------------------------------');

                       //OU

nomes.forEach((nome, indice) =>{
    console.log('Execução: ', indice + 1);
    console.log('Nome: ' + nome);
})
