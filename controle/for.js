let contador = 1
while(contador <= 10){
    console.log(`contador = ${contador}`)
    contador++
}

console.log('Acabou while')

for(let i = 1; i <= 10; i++){
    console.log(`contador = ${i}`)
}

console.log('Acabou for')

const notas = [0, 0.5, 5.7, 10, 9.7, 6.5]

for(i = 0; i < notas.length; i++){
    console.log(`nota ${i} = ${notas[i]}`)
}