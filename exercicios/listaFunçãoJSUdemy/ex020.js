//Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
//para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
//Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
//informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
//nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function minimoCedulas(valor){
    let notas = [100, 50, 10, 5, 1]
        
    let valorTotal = valor


    for(i = 0; i < notas.length; i++){
        let quantidade = Math.floor(valorTotal / notas[i])
        if(quantidade > 0){
            console.log(`${quantidade} nota(s) de R$ ${notas[i]}`)
            valorTotal -= quantidade * notas[i]
        }   
    }

}

minimoCedulas(555123)