// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor

function menorMaiorInt(arrayInt){
    let maiorAux = 0
    let menorAux = 0

    let maior = arrayInt[1]
    let menor = arrayInt[1]
    for(i = 0; i < arrayInt.length; i++){
        for(j = i+1; j < arrayInt.length; j++){
            maiorAux =  i > j ? arrayInt[i] : arrayInt[j]
            menorAux = j < i ? arrayInt[j] : arrayInt[i]

            maior = maior >= maiorAux ? maior : maiorAux
            menor = menor <= menorAux ? menor : menorAux
        }
    }

    return `${maior} valor maior e ${menor} valor menor`
}

console.log(menorMaiorInt([5, 2, 3, 7, 8, 10]))