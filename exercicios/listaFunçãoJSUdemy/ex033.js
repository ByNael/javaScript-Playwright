//Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
//quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
//Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
//mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['a', 'b', 'c', 'd']
let vetorDouble = [0.2, 0.5, 10.2, 11.3]

let novoArray1 = vetorInteiro.concat(vetorDouble, vetorString)
let novoArray2 = vetorString.concat(vetorDouble, vetorInteiro)

console.log(novoArray1)
console.log(novoArray2)