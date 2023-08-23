const baseURL = "https://03d0-2804-14d-5c32-8e78-400-d750-f490-966a-ngrok-free.app/";
const contentTable = document.querySelector(".content tbody");

async function request() {
  try {
    const response = await fetch(baseURL + "cadastroProdutos");
    console.log(response.json());
    return response.json();
  } catch (e) {
    console.error(e);
  }
}

request().then(function (response) {
  response.forEach((produto) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${produto.id}</td>
        <td>${produto.name}</td>
        <td>${produto.brand}</td>
        <td>${produto.qtd}</td>
        <td>
          <button>edit</button>
          <button>remove</button>
        </td>
        `;
    contentTable.appendChild(tr);
  });
});
