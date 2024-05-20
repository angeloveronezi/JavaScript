/*
  Exercicio 2 - Estrutura de decisão;

  Percorrer uma lista de cidades, contendo:
  São Paulo, Rio de Janeiro, Florianópolis, Recife;
  Para cada item, verificar se a cidade Florianópolis está presente na lista
  Printar nome da cidade;
  Caso esteja, avisar
  Caso não seja o elemento procurado, avisar.
  Número da execução;


  Exemplo Saída:
   Execução: 1
   Cidade: São Paulo
   Encontrado/Não encontrado
   -------------------------------
*/ 

const cidades = ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife'];

for (let indice = 0; indice < cidades.length; indice ++){
  console.log('----------------------------------');
  console.log('Execução: ' + (indice + 1));
  console.log('Nome: ' + cidades[indice]);
  if (cidades[indice] == 'Florianópolis'){
    console.log('Encontrado!!!');
  }
  else{
    console.log('Não Encontrado.');
  }
}
console.log('----------------------------------');

                       //OU

cidades.forEach((cidade, indice) =>{
  console.log('Execução: ', indice + 1);
  console.log('Nome: ' + cidade);
  if (cidade == 'Florianópolis'){
    console.log('Encontrado!!!');
  }
  else{
    console.log('Não encontrado.');
  }
  console.log('----------------------------------');
 })
                    