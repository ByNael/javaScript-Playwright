//Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
//parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
//anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
//compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

function anuidadeAssociacao(mes, valorAnuidade){
    switch(mes){
        case 1:
            return valorAnuidade
        case 2:
            valorFinal = valorAnuidade * (1.05) ** (mes - 1)
            return valorFinal
        case 3:
            valorFinal = valorAnuidade * (1.05) ** (mes - 1)
            return valorFinal
        case 4:
            valorFinal = valorAnuidade * (1.05) ** (mes - 1)
            return valorFinal
        case 5:
            valorFinal = valorAnuidade * (1.05) ** (mes - 1)
            return valorFinal
        case 6:
            valorFinal = valorAnuidade * (1.05) ** (mes - 1)
            return valorFinal
        case 7:
            valorFinal = valorAnuidade * (1.05) ** (mes - 1)
            return valorFinal
        case 8:
            valorFinal = valorAnuidade * (1.05) ** (mes - 1)
            return valorFinal
        case 9:
            valorFinal = valorAnuidade * (1.05) ** (mes - 1)
            return valorFinal
        case 10:
            valorFinal = valorAnuidade * (1.05) ** (mes - 1)
            return valorFinal
        case 11:
            valorFinal = valorAnuidade * (1.05) ** (mes - 1)
            return valorFinal
        case 12:
            valorFinal = valorAnuidade * (1.05) ** (mes - 1)
            return valorFinal
        default:
            return 'mes invalido'

    }
}

console.log(anuidadeAssociacao(1, 1000));  
console.log(anuidadeAssociacao(3, 1000));  
console.log(anuidadeAssociacao(6, 1000));  
console.log(anuidadeAssociacao(12, 1000)); 
console.log(anuidadeAssociacao(0, 1000));  
console.log(anuidadeAssociacao(13, 1000));