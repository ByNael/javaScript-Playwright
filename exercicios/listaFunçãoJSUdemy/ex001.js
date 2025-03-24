//Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

function calcular(x, y) {
    const resultados = [
        { operacao: 'soma', valor: x + y },
        { operacao: 'subtração', valor: x - y },
        { operacao: 'multiplicacao', valor: x * y },
        { operacao: 'divisao', valor: x / y },
        { operacao: 'potenciacao', valor: x ** y}  
    ];

    for (let i = 0; i < resultados.length; i++) {
        console.log(`resultados ${resultados[i].operacao} = ${resultados[i].valor}`);
    }
}

calcular(1, 2);