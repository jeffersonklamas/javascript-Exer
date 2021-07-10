const people = {
    nome:'Jefferson',
    idade: 52,
    cidade: 'Florianópolis',
}

// Notação de pontos

// acesse o nome da variavel do objeto com ponto (.) e acessa a String.

console.log(people.nome)

// Notação de colchetes
console.log(people['idade'])

// Notação de Destructuring

const { nome, idade, cidade } = people
console.log(nome)
console.log(idade)
console.log(cidade)