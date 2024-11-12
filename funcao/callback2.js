const notas = [7.7, 6.5, 5.5, 3.6, 7.1, 9.0]

let notasBaixas = []
for(let i in notas){
    if(notas[i]<7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//usando callback
let notasBaixas2 = notas.filter(function(nota){
    return nota<7
})

console.log(notasBaixas2)

//callback + arrow
let notaMenor7 = nota => nota<7
let notasBaixas3 = notas.filter(notaMenor7)
console.log(notasBaixas3)