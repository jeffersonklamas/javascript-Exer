// Crie um algoritmo que receba três notas de um aluno, calcule a sua média e
// mostre
// - Se a media for igual ou maior que 7 - Aprovado
// - Se a media for maior e igual a 5 e menor que 7 - Recuperação
// - Se a média for menor que 5 - Reprovado

function calculateAverage(note1, note2,note3) {
    let average = (note1 + note2 + note3) / 3

    if (average >= 7){
        return 'Approved'
    }

    if (average >= 5 && average < 7){
        return 'Recovery'
    }

    if (average < 5){
        return 'Disapproved'
    }
}

console.log(calculateAverage(2,2,10))

