//Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
//dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

function diaUtil(number){
    switch(number){
        case 1:
            return 'Domingo'
        case 7:
            return 'Sabado'
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            return 'Dia util'
        default:
            return 'Dia inválido'
    }
}

console.log(diaUtil(2))