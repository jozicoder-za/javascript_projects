const account = {
  balance: 2600,
  transactions: [],
};

function updateUI() {
  document.getElementById("balance").textContent = account.balance;
  const transactionList = document.getElementById("transactionList");
  transactionList.innerHTML = "";

  account.transactions.forEach((transaction) => {
    const div = document.createElement("div");
    div.classList.add("transaction");
    div.textContent = `${transaction.type.toUpperCase()} - R${transaction.amount}`;
    transactionList.appendChild(div);
  });
}

function deposit() {
  const amount = Number(document.getElementById("amount").value);

  if (amount <= 0) {
    alert("Enter a valid deposit amount.");
    return;
  }

  account.balance += amount;

  account.transactions.push({
    type: "deposit",
    amount: amount,
  });
  updateUI();
}

function withdraw() {
  const amount = Number(document.getElementById("amount").value);

  if (amount <= 0) {
    alert("Enter a valid withdrawal amount.");
    return;
  }

  if (amount > account.balance) {
    alert("Insufficient funds.");
    return;
  }

  account.balance -= amount;

  account.transactions.push({
    type: "withdraw",
    amount: amount,
  });
  updateUI();
}

updateUI();
