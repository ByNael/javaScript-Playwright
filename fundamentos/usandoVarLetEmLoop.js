for (var i = 0; i<10; i++){
    console.log(i)
}

console.log('i =', i)

//for (let k = 0; k<10; k++){
  //  console.log(k)
//}

//console.log('k =', k)

const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

const funcs2 = []

for (let k = 0; k < 10; k++) {
    funcs2.push(function() {
        console.log(k)
    })
}

funcs2[2]()
funcs2[8]()