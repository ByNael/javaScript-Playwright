// cre uma função que receba dois números e retorne se o mprimeiro é maior ou igual ao segundo.

function maiorIgualFunc(a, b){
    let maiorIgual = a >= b ? true : false
    console.log(maiorIgual)

    if (maiorIgual){
        console.log('O primeiro numero e igual ou maior que o segundo')
    } else{
        console.log('O primeiro numero nao e igual ou maior que o segundo')
    }
}

maiorIgualFunc(3,3)