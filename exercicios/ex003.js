// Desenvolva uma função que recebe dois parametros, um é a quantidade de horas trabalhadas por um funcionario no mês, e o quanto ele recebe por hora. O retorno da função deve ser 
// a string "salario igual a R$ X" e quem X é o quanto ofuncionário ganhou no mês

function salario(qtdHoras, valorHora){
    let salarioMensal = qtdHoras * valorHora
    console.log(`Salário mensal igual a: ${salarioMensal.toFixed(0)}`)
}

function valorHora(qtdHoras, salarioMensal){
    let valorHoras = salarioMensal/qtdHoras
    return valorHoras.toFixed(2)
}


let valorHoraFunc = valorHora(120, 1900)

salario(120, valorHoraFunc)