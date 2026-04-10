let inventory = JSON.parse(localStorage.getItem("inventory")) || [];

function saveData() {
  localStorage.setItem("inventory", JSON.stringify(inventory));
}

function addProduct() {
  const name = document.getElementById("name").value;
  const price = Number(document.getElementById("price").value);
  const stock = Number(document.getElementById("stock").value);
  const category = document.getElementById("category").value;
}
