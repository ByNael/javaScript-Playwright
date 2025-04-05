// Fazer um programa para encontrar todos os pares entre 1 e 100.

inicial = 1
final = 100
arrayEncontrados = []

while(inicial <= 100){
    if(inicial % 2 == 0){
        arrayEncontrados.push(inicial)
    }
    inicial++
}

console.log(arrayEncontrados)