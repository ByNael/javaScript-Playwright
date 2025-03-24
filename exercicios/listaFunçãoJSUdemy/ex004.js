//Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.

function calcular(dividendo, divisor){
    const resultados = [
        {operacao: 'divisão', valor: Math.floor(dividendo/divisor)},
        {operacao: 'resto da divisão', valor: dividendo%divisor}
    ]

    for(let i = 0; i < resultados.length; i++){
        console.log(`Resultado de ${resultados[i].operacao}: ${resultados[i].valor}`)
    }
}

calcular(20, 2)