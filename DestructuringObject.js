const filmes =[
    {
        id: 1,
        titulo: 'Todo cão merece o céu',
        descrição: 'desenho animado',
        duração: 120
    },
    {
        id: 2,
        titulo: 'Se foi Foi!',
        descrição: 'Sei la humor, humorado',
        duração: 89
    },
    {
        id: 3,
        titulo: 'UP',
        descrição: 'Desenho animado de animação animada',
        duração: 110
    },    {
        id: 4,
        titulo: 'The Bad Batch',
        descrição: 'desenho animado Stars Wars',
        duração: 25
    },
]

const [{ id, titulo, descrição, duração }] = filmes

filmes.map(filme => console.log(filme.titulo))
filmes.map(filme => console.log(filme.descrição))

