function criarTarefa() {
  const input = document.getElementById("inputTarefa");
  const tarefa = input.value.trim();

  if (tarefa === "") return;

  const tarefaDiv = document.createElement("div");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const textoTarefa = document.createElement("span");
  textoTarefa.textContent = tarefa;

  const botaoExcluir = document.createElement("button");
  botaoExcluir.textContent = "✕"; 
  botaoExcluir.className = "btn-excluir";
  botaoExcluir.onclick = function () {
    tarefaDiv.remove(); 
  };

  tarefaDiv.appendChild(checkbox);
  tarefaDiv.appendChild(textoTarefa);
  tarefaDiv.appendChild(botaoExcluir);

  document.getElementById("listaTarefas").appendChild(tarefaDiv);

  input.value = "";

  checkbox.addEventListener("change", function () {
    textoTarefa.classList.toggle("tarefaConcluida", this.checked);
  });
}
