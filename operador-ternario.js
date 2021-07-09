// Para escrever as instruções condicionais, o operador ternario é menos verboso que escrever if e else e while.

// if...else
// Abaixo seria uma instrução normal, no modo antigo
/*
if (idade >= 18) {
    return 'Maior de Idade'
} else {
    return 'Menor de idade'
}
*/

// De forma reduzida.
// O que for verdadeiro seria após o sinal de interrogação e após o sinal de : seria o que é falso.

age = 17

function calculateAge(age) {
    return age >= 18 ? 'Maior de Idade' : 'Menor de idade'
}

console.log(calculateAge(age))

// console.log(`Sua Idade é, {{age}}`) // Interpolação.
