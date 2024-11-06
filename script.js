//Função para o menu ajuda
var elementosDuvida = document.querySelectorAll(".questions");

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    //se esta selecionda
    const resposta = duvida.querySelector(".item-answer");

    //esconde
    if (resposta.style.display === "block") {
      resposta.style.display = "none";
    } else {
      //mostra
      resposta.style.display = "block";
    }
  });
});

// Listas de gastos
const categoriasGastos = [
  "Casa",
  "Educação",
  "Eletrônicos",
  "Lanches",
  "Lazer",
  "Saúde",
  "Serviços",
  "Mercado",
  "Transporte",
  "Vestuário",
  "Viagens",
  "Outros",
];

//Lista de receitas
const categoriasReceitas = [
  "Salário",
  "Investimento",
  "Prêmios",
  "Presente",
  "Outros",
];

// Função para exibir o menu para add nova transação
document
  .getElementById("new-transaction-btn")
  .addEventListener("click", function (event) {
    var menu = document.getElementById("new-transaction-menu");
    menu.style.display = "block";
    menu.style.top = event.clientY + "px";
    menu.style.left = event.clientX + "px";
    event.stopPropagation();
  });

// Função para selecionar o tipo de transação e abrir o modal
function selecionarTipo(tipo) {
  document.getElementById("tipo").value = tipo;
  var modalTitle = document.querySelector("#transaction-modal h2");
  modalTitle.textContent = tipo === "gasto" ? "Novo Gasto" : "Nova Receita";

  abrirModal();
  fecharMenu();
}

// Função para fechar o menu de seleção
function fecharMenu() {
  var menu = document.getElementById("new-transaction-menu");
  menu.style.display = "none";
}

// Função para abrir o modal
function abrirModal() {
  var modal = document.getElementById("transaction-modal");
  modal.style.display = "flex";
}

// Função para fechar o modal
function fecharModal() {
  var modal = document.getElementById("transaction-modal");
  modal.style.display = "none";
}

// Fecha o menu se clicar fora dele
window.addEventListener("click", function (event) {
  var menu = document.getElementById("new-transaction-menu");
  if (
    !menu.contains(event.target) &&
    event.target.id !== "new-transaction-btn"
  ) {
    fecharMenu();
  }
});

// Função para selecionar o tipo de transação e abrir o modal
function selecionarTipo(tipo) {
  document.getElementById("tipo").value = tipo;
  var modalTitle = document.querySelector("#transaction-modal h2");
  modalTitle.textContent = tipo === "gasto" ? "Novo Gasto" : "Nova Receita";

  preencherCategorias(tipo);
  abrirModal();
  fecharMenu();
}

// Função para preencher as categorias no campo de seleção
function preencherCategorias(tipo) {
  var categoriaSelect = document.getElementById("categoria");
  categoriaSelect.innerHTML = "";
  var categorias = tipo === "gasto" ? categoriasGastos : categoriasReceitas;

  categorias.forEach(function (categoria) {
    var option = document.createElement("option");
    option.value = categoria;
    option.textContent = categoria;
    categoriaSelect.appendChild(option);
  });
}

// Função para adicionar uma nova transação (gasto ou receita)
function adicionarTransacao() {
  var tipo = document.getElementById("tipo").value;
  var movimentacao = document.getElementById("movimentacao").value;
  var valor = document.getElementById("valor").value;
  var categoria = document.getElementById("categoria").value;
  var data = document.getElementById("data").value;
  var descricao = document.getElementById("descricao").value;

  if (movimentacao === "") {
    alert("Por favor, insira o tipo da movimentação.");
    return;
  }
  if (valor <= 0 || isNaN(valor)) {
    alert("Por favor, insira um valor válido maior que zero.");
    return;
  }
  if (categoria.trim() === "") {
    alert("Por favor, selecione uma categoria.");
    return;
  }
  if (data === "") {
    alert("Por favor, insira uma data válida.");
    return;
  }

  alert("Transação adicionada com sucesso: " + tipo);
  limparFormulario();
  fecharModal();
}

// Função para limpar os campos do formulário
function limparFormulario() {
  document.getElementById("movimentacao").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("categoria").value = "";
  document.getElementById("data").value = "";
  document.getElementById("descricao").value = "";
}

// Fecha o modal se o usuário clicar fora no fundo
window.onclick = function (event) {
  var modal = document.getElementById("transaction-modal");
  if (event.target === modal) {
    fecharModal();
  }
};

//------------------------------------------------//
// Scrip  geral para atualizar o nome e foto de perfil em todas as páginas
function keepUserProfileInfo() {
  const keepBirthday = localStorage.getItem("localBirthday");
  const keepUserNameProfile = localStorage.getItem("localUsername");
  const keepEmail = localStorage.getItem("localEmail");
  const keepPhone = localStorage.getItem("localPhone");
  const keepGender = localStorage.getItem("localGender");

  if (keepBirthday) document.getElementById("birthday").value = keepBirthday;

  if (keepUserNameProfile)
    document.getElementById("username").value = keepUserNameProfile;

  if (keepEmail) document.getElementById("email").value = keepEmail;

  if (keepPhone) document.getElementById("phone").value = keepPhone;

  if (keepGender) document.getElementById("gender").value = keepGender;
}

function keepUserNameInfo() {
  const keepUserNameSideBar = localStorage.getItem("localUser-name");
  const keepWelcomeUserName = localStorage.getItem("localWelcome-user-name");

  if (keepUserNameSideBar)
    document.getElementById("user-name").innerText = keepUserNameSideBar;

  if (keepWelcomeUserName)
    document.getElementById("welcome-user-name").innerText =
      keepWelcomeUserName;
}

function keepUserIcon() {
  const keepUserImage = localStorage.getItem("localUser-image");

  if (keepUserImage) {
    const userImage = document.getElementById("user-image");
    const userIcon = document.getElementById("user-icon");

    userImage.src = keepUserImage;

    userImage.style.display = "block";
    userIcon.style.display = "none";
  }
}

document.querySelectorAll(".item-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    if (answer.classList.contains("revealed")) {
      answer.classList.remove("revealed");
    } else {
      answer.classList.add("revealed");
    }
  });
});

document.addEventListener("DOMContentLoaded", keepUserProfileInfo);
document.addEventListener("DOMContentLoaded", keepUserNameInfo);
document.addEventListener("DOMContentLoaded", keepUserIcon);
