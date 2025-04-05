//Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function mediaAritmeticaArray(arrayInt){
    let quantidade = arrayInt.length
    let somaTotal = 0
    for(i = 0; i < arrayInt.length; i++){
        somaTotal += arrayInt[i]
    }
    let mediaAritmetica = somaTotal/quantidade

    return mediaAritmetica.toFixed(2)
}

console.log(mediaAritmeticaArray([8.2, 7.8, 10, 9.5, 6.7]))