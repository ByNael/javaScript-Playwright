// Um funcionário irá receber um aumento de acordo com o seu plano de
//trabalho, de acordo com a tabela abaixo: A = 10%, B = 15% e C = 20%
//Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
//novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido

function aumento(plano, salario){
    switch(plano){
        case 'A':
            aumentoSalario = salario + ((salario*10)/100)
            return aumentoSalario
        case 'B':
            aumentoSalario = salario + ((salario*15)/100)
            return aumentoSalario
        case 'C':
            aumentoSalario = salario + ((salario*20)/100)
            return aumentoSalario
        default: 
            return 'não temos esse plano de aumento' 
    }
}

console.log(aumento('A', 1900))
console.log(aumento('B', 1900))
console.log(aumento('C', 1900))