{{{{{{
    var sera = "sera"
    console.log(sera)    
}}}}}}

console.log(sera)

function teste(){
    var local = 123 //quando uma variavel é criada dentro da função ela não pode ser usada fora
    console.log(local)
}

teste()
//console.log(local)

var numero = 1
{
    var numero = 2 
    console.log('dentro =', numero)
}
console.log('fora =', numero)