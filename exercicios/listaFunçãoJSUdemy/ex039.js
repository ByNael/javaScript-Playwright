function trocarElementos(vetorA, vetorB) {
    for (let i = 0; i < vetorA.length; i++) {
        vetorA[i] = vetorA[i] + vetorB[i];
        vetorB[i] = vetorA[i] - vetorB[i];
        vetorA[i] = vetorA[i] - vetorB[i];
    }

    console.log("Vetor A após troca:", vetorA);
    console.log("Vetor B após troca:", vetorB);
}

let A = [1, 2, 3];
let B = [4, 5, 6];

trocarElementos(A, B);