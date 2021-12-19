class Tarefa {
    constructor(nome, categoria, realizada) {
        this.nome = nome
        this.categoria = categoria
        this.realizada = realizada
    }
}

const tarefas = [
    new Tarefa('Comprar leite', 'compras', false), 
    new Tarefa('Escutar chimbinha', 'lazer', true)
];
