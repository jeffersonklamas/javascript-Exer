
// arrray modelo
const alunosAcademy = ['Elisia', 'Anna', 'Pedro', 'Fernanda']

// Acessando informações em um array
//console.log(alunosAcademy[NúmeroDoIndexQueQuerAcessar])

// Operador spread(...) Traz todos os itens constantes no array indicado, 
// copia e não altera as informações do array.
// E é possível incluir novos itens em um novo array.

// const novosAlunos = [...alunosAcademy, "Jefferson"]
// console.log(novosAlunos)

// Métodos de Iteração normal

// for (let i = 0; i < novosAlunos.length; i++){
//     console.log(novosAlunos[i])
// }

// Métodos de iteração modernos

// método **.map** que espera uma função callback que será executada,
// cada vez que o iterar pela array.
// Pode ser usado uma arrow function.

// novosAlunos.map(aluno => console.log(aluno))

// método **.filter**
// array modelo
const numeros = [34, -62, 235, 45, 65, 98, 112, 12, 5, -55]

// filtrando números ímpares
// const numerosImpares = numeros.filter(numero => numero %2 !=0)
// console.log(numerosImpares)

// filtrando números pares
// const numerosPares = numeros.filter(numero => numero %2 ==0)
// console.log(numerosPares)

// método sort
//const numerosOrdenadosCrescente = numeros.sort((a,b) => a-b)
//console.log(numerosOrdenadosCrescente)

// const numerosOrdenadosDecrescente = numeros.sort((a,b) => b-a)
// console.log(numerosOrdenadosDecrescente)

// método **`reduce`** o mesmo reduz o array para um resultado de uma operação matemática.

const soma = numeros.reduce((valorAnterior, valorNovo) => {
    return valorAnterior + valorNovo
},500)

console.log(soma) // total 989


