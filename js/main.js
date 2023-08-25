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
