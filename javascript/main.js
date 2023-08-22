const baseURL = "../produtos.json"

const response =  fetch(baseURL, {
  method: "GET",
  headers: {
    "Conntent-Type": "application/json",
  },
  
}).then();
