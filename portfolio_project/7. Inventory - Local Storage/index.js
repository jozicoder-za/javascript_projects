let inventory = JSON.parse(localStorage.getItem("inventory")) || [];

function saveData() {
  localStorage.setItem("inventory", JSON.stringify(inventory));
}

function addProduct() {
  const name = document.getElementById("name").value;
  const price = Number(document.getElementById("price").value);
  const stock = Number(document.getElementById("stock").value);
  const category = document.getElementById("category").value;

  if (!name || price <= 0 || stock < 0) {
    alert("Invalid input");
    return;
  }

  inventory.push({ name, price, stock, category });

  saveData();
  updateUI();
}

function updateUI() {
  let totalValue = 0;

  const list = document.getElementById("list");
  list.innerHTML = "";

  inventory.forEach((product) => {
    totalValue += product.price * product.stock;
    const div = document.createElement("div");
    div.classList.add("product-item");

    if (product.stock < 10) {
      div.classList.add("low-stock");
    }

    div.textContent = `${product.name} | R${product.price} | Stock: ${product.stock} | ${product.category}`;

    list.appendChild(div);
  });
  document.getElementById("totalProducts").textContent = inventory.length;
  document.getElementById("inventoryValue").textContent = totalValue;
}

// Initial load
updateUI();
