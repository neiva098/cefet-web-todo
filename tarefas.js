class Tarefa {
    constructor(nome, categoria, realizada) {
        this.nome = nome
        this.categoria = categoria
        this.realizada = realizada
    }

    adicionaNaPagina() {
        const taskList = document.querySelector('#lista-tarefas');
        
        const newTask = document.createElement('li');
        newTask.classList.add('item-tarefa', `categoria-${this.categoria}`);

        if (this.realizada) newTask.classList.add('marcado');

        newTask.innerHTML = this.nome;
       
        taskList.appendChild(newTask);
    }
}

const tarefas = [
    new Tarefa('Comprar leite', 'compras', false), 
    new Tarefa('Escutar chimbinha', 'lazer', true)
];

tarefas.forEach(task => task.adicionaNaPagina())