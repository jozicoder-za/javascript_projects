let account = JSON.parse(localStorage.getItem("account")) || {
  balance: 2500,
  transactions: [],
};

function saveData() {
  localStorage.setItem("account", JSON.stringify(account));
}
