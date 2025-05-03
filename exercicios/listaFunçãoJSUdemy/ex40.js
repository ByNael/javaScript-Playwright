function defConceito(vetorNotas){
    for(i = 0; i < vetorNotas.length; i++){
        if(vetorNotas[i] > 0.0 && vetorNotas[i] <= 4.9){
            vetorNotas[i] = 'Conceito D'
        } else if(vetorNotas[i] > 4.9 && vetorNotas[i] <= 6.9){
            vetorNotas[i] = 'Conceito C'
        } else if(vetorNotas[i] > 6.9 && vetorNotas[i] <= 8.9){
            vetorNotas[i] = 'Conceito B'
        } else{
            vetorNotas[i] = 'Conceito A'
        }
    }

    return vetorNotas
}

console.log(defConceito([0.0, 3.5, 4.9, 6.6, 7.0, 7.9, 8.8, 9, 10]))