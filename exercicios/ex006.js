function inverso(valor){
    const aux = typeof(valor)

    if(aux == "boolean"){
        return !valor
    } else if(aux == "number"){
        return -valor
    } else{
        return `Valor booleano ou numerico esperado o tipo do valor passado é: ${aux}`
    }
}

console.log(inverso(9))