function triangulo(x, y, z){
    if(x == y && y == z){
        console.log('Você passou os valores de um triangulo equilatero!')
    } else if(x == y && y != z){
        console.log('Você passou os valores de um triangulo isosceles!')
    } else if(y == z && z != x){
        console.log('Você passou os valores de um triangulo isosceles!')
    } else if(z == x && x != y){
        console.log('Você passou os valores de um triangulo isosceles!')
    } else {
        console.log('Você passou os valores de um triangulo escaleno!')
    }
}

triangulo(6, 5, 3)