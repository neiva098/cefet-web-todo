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

function incluiTarefa(event) {
    const nome = document.querySelector('#nova-tarefa-nome');

    if (!nome) return
    
    const categoria = document.querySelector('#nova-tarefa-categoria');
    
    const tarefa = new Tarefa(nome.value, categoria.value, false);
    
    tarefas.push(tarefa);
    tarefa.adicionaNaPagina();
    
    nome.value = '';
    categoria.value = 'lazer';
}

document.querySelector('#incluir-nova-tarefa').addEventListener('click', incluiTarefa);