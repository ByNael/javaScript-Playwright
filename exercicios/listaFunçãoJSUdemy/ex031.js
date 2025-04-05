//Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
//e imprime a quantidade no console.

function quantidadeNegativos(arrayInt){
    let negativos = 0

    for(i = 0; i < arrayInt.length; i++){
        if(arrayInt[i] < 0){
            negativos++
        }
    }

    return negativos
}

console.log(quantidadeNegativos([-1, 2, 5, 6, 2, 678, -2, -4, -6]))