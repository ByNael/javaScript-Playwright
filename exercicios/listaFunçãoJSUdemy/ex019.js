function cardapio(codigo, quantidade){
    switch(codigo){
        case 100:
            custo = quantidade * 3.00
            return `A quantidade ${quantidade} de cachorro quente custa ${custo}`
        case 200:
            custo = quantidade * 4.00
            return `A quantidade ${quantidade} de hamburguer simples custa ${custo}`
        case 300:
            custo = quantidade * 5.5
            return `A quantidade ${quantidade} de cheeseburguer custa ${custo}`
        case 400:
            custo = quantidade * 7.5
            return `A quantidade ${quantidade} de bauru custa ${custo}`
        case 500:
            custo = quantidade * 3.5
            return `A quantidade ${quantidade} de refrigerante custa ${custo}`
        case 600:
            custo = quantidade * 2.8
            return `A quantidade ${quantidade} de suco custa ${custo}`
        default:
            return 'não possuimos este produto'
    }
}

console.log(cardapio(100, 5))
console.log(cardapio(200, 5))
console.log(cardapio(300, 5))
console.log(cardapio(400, 5))
console.log(cardapio(500, 5))
console.log(cardapio(600, 5))
console.log(cardapio(45500, 5))

