//load saved runs
let runs = JSON.parse(localStorage.getItem("runs")) || [];

// Save runs
function saveData() {
  localStorage.setItem("runs", JSON.stringify(runs));
}

function addRun() {
  const distance = Number(document.getElementById("distance").value);
  const duration = Number(document.getElementById("duration").value);
  const terrain = document.getElementById("terrain").value;

  if (distance <= 0 || duration <= 0) {
    alert("Invalid input");
    return;
  }

  runs.push({ distance, duration, terrain });
  saveData();
  updateUI();
}
