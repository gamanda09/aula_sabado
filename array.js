const vetor = [5, 6, 3, 2, 8, 9, 4, 1, 7, 2, 3]


maiorNumero = 0
menorNumero = 30

for(let i = 0; i < vetor.length; i ++){
  if(vetor[i] > maiorNumero){
    maiorNumero = vetor[i]
  }

  if(vetor[i] < menorNumero){
    menorNumero = vetor[i]

  }
}
console.log(`O maior número do vetor é: ${maiorNumero}`)
console.log(`O maior número do vetor é: ${menorNumero}`)





