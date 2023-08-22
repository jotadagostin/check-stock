const baseURL = "../produtos.json";
const contentTable = document.querySelector(".content tbody");

async function request() {
  try {
    const response = await fetch(baseURL);
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
