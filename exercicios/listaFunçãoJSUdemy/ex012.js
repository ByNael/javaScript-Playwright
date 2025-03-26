// Faça um algoritmo que calcule o fatorial de um número.

function fatorialCalculate(number){
    let fatorial = 1

    for(i = number; i > 1; i--){
        fatorial *= i
    }

    return fatorial
}

console.log(fatorialCalculate(5))