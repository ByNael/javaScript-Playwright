// Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.

function helloWorld(number){
    let i = 1
    while(i <= number){
        console.log(`${i}. hello world`)
        i++
    }
}

helloWorld(11)