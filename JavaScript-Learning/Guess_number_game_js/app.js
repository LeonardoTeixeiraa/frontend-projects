let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

let numeroSecreto = gerarNumeroAleatório();

function verificarChute() {
  let chute = document.querySelector("input").value;
  
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Você acertou!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    exibirTextoNaTela(
      "p",
      `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior");
    }
    tentativas++;
  }
  limparCampo();
}

function gerarNumeroAleatório() {
  return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatório();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}
