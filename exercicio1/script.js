//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

const sacolao = []

//a) Crie três objetos que vão representar frutas do sacolão. 
//Os objetos devem ter as seguintes propriedades: 

const fruta1 = {
    nome: "Banana",
    preço: "3.00",
    disponibilidade: true
}

const fruta2 = {
    Nome: "Manga",
    Preço: 4.00,
    Disponibilidade: false
}

const fruta3 = {
    Nome: "Abacaxi",
    Preço: 8.00,
    Disponibilidade: true
}

// b) Adicione os objetos ao array
//  `sacolao` utilizando o método **`push()`**

sacolao.push(fruta1,fruta2, fruta3)

//c) Imprima a o array `sacolao`, e certifique-se 
// de que agora ela seja um array **com três objetos**

console.log(sacolao)

//
