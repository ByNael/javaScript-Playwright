function mesDoAno(numero){
    if(isNaN(numero)){
        console.log('o código só aceita números inteiros de 1 ~ 12')
        return
    } else if(numero > 12 || numero < 1){
        console.log('Não existe mês do ano correspondente ao número escolhido, o código só aceita números inteiros de 1 ~ 12')
        return
    } 
    //console.log('debug')
    switch (numero) {
        case 1:
            console.log('janeiro')
            break
        case 2:
            console.log('fevereiro')
            break
        case 3:
            console.log('março')
            break
        case 4:
            console.log('abril')
            break
        case 5:
            console.log('maio')
            break
        case 6:
            console.log('junho')
            break
        case 7:
            console.log('julho')
            break
        case 8:
            console.log('agosto')
            break
        case 9:
            console.log('setembro')
            break
        case 10:
            console.log('outubro')
            break
        case 11:
            console.log('novembro')
            break
        case 12: 
            console.log('dezembro')
            break
    }
}


mesDoAno(1)