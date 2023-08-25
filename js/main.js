const baseURL = "http://localhost:3000/";
const conteudo_tabela = document.querySelector(".conteudo tbody");
const adicionar = document.querySelector("#adicionar-produto");
const cadastro = document.querySelector("#cadastro");
const conteudo = document.querySelector("#conteudo");
const busca = document.querySelector("#busca");
let item = {
  nome: "",
  marca: "",
  qtd: 0,
};

busca.addEventListener("input", () => {
  console.log(busca.value);

  document.querySelector("tr").forEach((e) => {
    e.hidden = true;
  });
  const nome = document.querySelector("nome-produto");
  const marcas = document.querySelector(".produto-marca");
  const valores = [...nome, ...marcas];

  valores.forEach((e) => {
    if (e.textContent.toLowerCase().includes(busca.value.toLowerCase())) {
      e.parentNode.hidden = false;
    }
  });
});

adicionar.addEventListener("click", () => {
  cadastro.classList.toggle("cadastro-ativo");
});

cadastro.addEventListener("submit", (e) => {
  e.preventDefault();

  item.nome = e.target.querySelector("[name=nome]").value;
  item.marca = e.target.querySelector("[name=marca]").value;
  item.qtd = e.target.querySelector("[name=qtd]").value;

  createItem(item).then(function (response) {
    console.log(response);
  });

  getProdutos().then(function (response) {
    criaItens(response);
  });
});
