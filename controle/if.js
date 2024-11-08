function boaNoticia(nota) {
    if(nota >= 7) {
        console.log("tá passado com " + nota)
    } else {
        console.log('reprovado')
    }
}

boaNoticia(7)
boaNoticia(5)

function seForVerdareiroEuFalo(valor) {
    if(valor) {
        console.log('É verdade que ' + valor)
    }
}

seForVerdareiroEuFalo()
seForVerdareiroEuFalo(null)
seForVerdareiroEuFalo(undefined)
seForVerdareiroEuFalo(NaN)
seForVerdareiroEuFalo('')
seForVerdareiroEuFalo(0)
seForVerdareiroEuFalo(-1)
seForVerdareiroEuFalo(' ')
seForVerdareiroEuFalo('?')
seForVerdareiroEuFalo([])
seForVerdareiroEuFalo([1, 2])
seForVerdareiroEuFalo({})


