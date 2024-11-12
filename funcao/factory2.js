function criarProduto(nomeProduto, precoProduto){
    return {
        nome: nomeProduto,
        preco: precoProduto,
        desconto: '20%'
    }
}

console.log(criarProduto('carro', 123421))