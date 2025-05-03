function quantosImpares(inicio, fim){
    impares = []
    for(i = inicio; i < fim; i++){
        if(i % 2 == 1){
            impares.push(i)
        }
    }  
    return impares
}

console.log(quantosImpares(0, 100))