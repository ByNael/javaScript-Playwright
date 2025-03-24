//Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
//primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
//retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao){
    let formulaSimples = capitalInicial * taxaJuros * tempoAplicacao
    let montanteSimples = capitalInicial + formulaSimples
    return montanteSimples
}

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao){
    let formulaComposta = ((1 + taxaJuros) ** tempoAplicacao)
    let montanteComposto = capitalInicial * formulaComposta
    return montanteComposto.toFixed(2)
}


console.log(jurosSimples(1000, 0.05, 3))
console.log(jurosCompostos(1000, 0.05, 3))