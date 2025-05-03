//Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
//inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
//elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
//o valor do elemento for maior que 5.

function mutiplicarPorX(vetor, numeroEscolhido){
    for(i = 0; i < vetor.length; i++){
        valorMultiplicado = numeroEscolhido*vetor[i]
        vetor[i] = valorMultiplicado
    }
    return vetor
}

function multiplicarMaiorQue5(vetor, numeroEscolhido){
    if(numeroEscolhido > 5){ 
        for(i = 0; i < vetor.length; i++){
            valorMultiplicado = numeroEscolhido*vetor[i]
            vetor[i] = valorMultiplicado
        }
        return vetor
    }else {
        return 'valor escolhido menor que 5'
    }
}

console.log(mutiplicarPorX([0, 1, 2], 3))
console.log(multiplicarMaiorQue5([0, 1, 2], 6))