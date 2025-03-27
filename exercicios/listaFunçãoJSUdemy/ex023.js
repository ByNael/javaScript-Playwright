const readline = require("readline-sync");

function mediaPonderada(){
    while(true){
        let codigo = parseInt(readline.question('Digite o código do aluno (digite um numero negativo para sair'))

        if(codigo < 0){
            console.log('programa encerrando')
            break
        }

        let nota1 = parseFloat(readline.question('Digite a primeira nota: '))
        let nota2 = parseFloat(readline.question('Digite a segunda nota: '))
        let nota3 = parseFloat(readline.question('Digite a terceira nota: '))

        let media = 0

        if(nota1 > nota2 && nota1 > nota3){
            media = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10
        } else if(nota2 > nota1 && nota2 > nota3){
            media = ((nota2 * 4) + (nota1 * 3) + (nota3 * 3)) / 10
        } else if(nota3 > nota1 && nota3 > nota2){
            media = ((nota3 * 4) + (nota2 * 3) + (nota1 * 3)) / 10
        }

        console.log(`Código do aluno: ${codigo}`);
        console.log(`Notas: ${nota1}, ${nota2}, ${nota3}`);
        console.log(`Média Ponderada: ${media.toFixed(2)}`);
        console.log(media >= 5 ? "APROVADO" : "REPROVADO");
        console.log("----------------------------");
    }
}

mediaPonderada()