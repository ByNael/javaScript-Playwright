//escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias. (desconsiderar anos bissextos e dias decorridos desde o ultimo aniversario)

function converteIdade(idade){
    idadeDias = idade * 365
    console.log(`Sua idade em dias é: ${idadeDias}`)
}

converteIdade(25)