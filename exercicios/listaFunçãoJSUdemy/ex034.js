//Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
//todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras

function caracteresIguais(string1, string2){
    string1 = string1.toLowerCase()
    string2 = string2.toLowerCase()

    for(i = 0; i < string1.length; i++){
        let caractere = string1[i]
        let encontrado = false;

        for (let j = 0; j < string2.length; j++) {
            if (caractere === string2[j]) {
              encontrado = true;
              break;
            }
        }

        if(!encontrado){
            return false
        }
    }

    for (let i = 0; i < string2.length; i++) {
        let caractere = string2[i];
        let encontrado = false;
    
        for (let j = 0; j < string1.length; j++) {
          if (caractere === string1[j]) {
            encontrado = true;
            break;
          }
        }
    
        if (!encontrado) {
          return false;
        }
      }
    
      // Se passou pelos dois testes, retorna true
      return true;
}


console.log(caracteresIguais("abc", "CBA"));         // true
console.log(caracteresIguais("teste", "Tetes"));     // true
console.log(caracteresIguais("abcd", "abc"));        // false
console.log(caracteresIguais("aA", "aaAA"));         // true
console.log(caracteresIguais("java", "javascript")); // false