//load saved runs
let runs = JSON.parse(localStorage.getItem("runs")) || [];

// Save runs
function saveData() {
  localStorage.setItem("runs", JSON.stringify(runs));
}

// Add run
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

// Update UI + stats

function updateUI() {
  let totalDistance = 0;
  let totalDuration = 0;
  let longestRun = 0;
  let terrainBreakdown = {};
}
