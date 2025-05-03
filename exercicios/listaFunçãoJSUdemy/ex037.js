//Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
//como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
//bem como a soma dos elementos.

function progressãoAritmetica(tamanhoTermo, primeiroTermo, razao){
    let vetorAritmetica = []
    let soma = 0

    for(i = 0; i < tamanhoTermo; i++){
        let termo = primeiroTermo + i + razao
        vetorAritmetica.push(termo)
        soma += termo
    }
    
    console.log("Termos PA:", vetorAritmetica.join(', '))
    console.log("Soma dos termos:", soma)
}

function progressãoGeometrica(tamanhoTermo, primeiroTermo, razao){
    let vetorGeomtrico = []
    let soma = 0

    for(i = 0; i < tamanhoTermo; i++){
        let termo = primeiroTermo * Math.pow(razao, i)
        vetorGeomtrico.push(termo)
        soma += termo
    }

    console.log("Termos PG:", vetorGeomtrico.join(', '))
    console.log("Soma dos termos:", soma)
}


console.log(progressãoAritmetica(5, 1, 2))
console.log(progressãoGeometrica(5, 1, 2))