// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
//Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
//Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
//ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
//triângulo).


function triangulo(x, y, z){
    let lados = [x, y, z]
    let iguais = 0
    
    for(i = 0; i < lados.length; i++){
        for(j = i+1; j < lados.length; j++){
            if(lados[i] === lados[j]){
                iguais++
            }
        }
    }

    if(iguais === 3){
        console.log('Você passou os valores de um triangulo equilatero!')
    } else if(iguais === 1){
        console.log('Você passou os valores de um triangulo isosceles!')
    } else{
        console.log('Você passou os valores de um triangulo escaleno!')
    }
}

triangulo(6, 5, 3)
triangulo(6, 6, 6)
triangulo(5, 5, 3)