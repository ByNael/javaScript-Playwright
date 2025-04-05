//Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
function imparPar(vetor){
    let pares = 0
    let impares = 0

    for(i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 == 0){
            pares++
        } else if(vetor[i] % 2 != 0){
            impares++
        } else{
            return 'valor invalido'
        }
    }

    console.log(`${pares} pares e ${impares} impares`)
}

console.log(imparPar([0,3,4,6,5,2,15]))