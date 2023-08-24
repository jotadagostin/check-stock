const baseURL = "http://localhost:3000";
const contentTable = document.querySelector(".content tbody");

async function request() {
  try {
    const response = await fetch(baseURL + "cadastroProdutos");
    return response.json();
  } catch (e) {
    console.error(e);
  }
}

request().then(function (response) {
  console.log(response);
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

async function createItem(item) {
  try {
    const response = await fetch(baseURL + "cadastroProdutos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

cadastroProdutos
