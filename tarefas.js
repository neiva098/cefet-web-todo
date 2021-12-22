class Tarefa {
  constructor(nome, categoria, realizada) {
    this.nome = nome;
    this.categoria = categoria;
    this.realizada = realizada;
  }

  adicionaNaPagina() {
    const taskList = document.querySelector("#lista-tarefas");

    const newTask = document.createElement("li");
    newTask.classList.add("item-tarefa", `categoria-${this.categoria}`);

    if (this.realizada) newTask.classList.add("marcado");

    newTask.innerHTML = this.nome;

    novaTarefa.addEventListener("click", concluiTarefa);

    taskList.appendChild(newTask);
  }
}

const tarefas = [
  new Tarefa("Comprar leite", "compras", false),
  new Tarefa("Escutar chimbinha", "lazer", true),
];

tarefas.forEach((task) => task.adicionaNaPagina());

function incluiTarefa(event) {
  const nome = document.querySelector("#nova-tarefa-nome");

  if (!nome) return;

  const categoria = document.querySelector("#nova-tarefa-categoria");

  const tarefa = new Tarefa(nome.value, categoria.value, false);

  tarefas.push(tarefa);
  tarefa.adicionaNaPagina();

  nome.value = "";
  categoria.value = "lazer";
}

document
  .querySelector("#incluir-nova-tarefa")
  .addEventListener("click", incluiTarefa);

document
  .querySelector("#filtro-de-categoria")
  .addEventListener("change", (event) => {
    const categoria = event.currentTarget.value;
    const listaDeTarefas = document.querySelectorAll("#lista-tarefas li");

    if (categoria) {
      for (const tarefa of listaDeTarefas) {
        if (tarefa.classList.contains(`categoria-${categoria}`)) {
          tarefa.classList.remove("retido-no-filtro");
        } else tarefa.classList.add("retido-no-filtro");
      }
      return;
    }

    for (const tarefa of listaDeTarefas) {
      tarefa.classList.remove("retido-no-filtro");
    }
  });

function concluiTarefa(event) {
  event.currentTarget.classList.toggle("marcado");
}
