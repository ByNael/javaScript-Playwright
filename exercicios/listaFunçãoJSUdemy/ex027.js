//Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
//crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
//quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

function crescimento(altura1, taxaCrescimento1, altura2, taxaCrescimento2){
    if (altura1 === altura2) {
        console.log("As crianças têm a mesma altura.")
        return;
    }

    let menorAltura = altura1 < altura2 ? altura1 : altura2
    let maiorAltura = altura1 > altura2 ? altura1 : altura2
    let taxaMenor = altura1 < altura2 ? taxaCrescimento1 : taxaCrescimento2
    let taxaMaior = altura1 > altura2 ? taxaCrescimento1 : taxaCrescimento2

    if(taxaMenor <= taxaMaior){
        console.log('A criança menor nunca ultrapassara a outra')
        return
    }

    let anos = 0
    while(menorAltura <= maiorAltura){
        menorAltura += taxaMenor
        maiorAltura += taxaMaior
        anos++
    }

    console.log(`A criança menor ultrapassará a maior em ${anos} anos.`)
}

crescimento(120, 5, 130, 2); // Saída: "A criança menor ultrapassará a maior em X anos."
crescimento(150, 2, 140, 4); // Saída: "A criança menor ultrapassará a maior em Y anos."
crescimento(130, 3, 130, 2); // Saída: "As crianças têm a mesma altura."
crescimento(110, 2, 120, 3); // Saída: "A criança menor nunca ultrapassará a maior."