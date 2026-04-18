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

  const list = document.getElementById("list");
  list.innerHTML = "";

  runs.forEach((run) => {
    totalDistance += run.distance;
    totalDuration += run.duration;

    if (run.distance > longestRun) {
      longestRun = run.distance;
    }

    if (!terrainBreakdown[run.terrain]) {
      terrainBreakdown[run.terrain] = 0;
    }

    terrainBreakdown[run.terrain] += run.distance;

    const div = document.createElement("div");
    div.classList.add("run-item");
    div.textContent = `${run.distance} km | ${run.duration} min | ${run.terrain}`;

    list.appendChild(div);
  });

  let averagePace = 0;

  if (totalDistance > 0) {
    averagePace = (totalDuration / totalDistance).toFixed(2);
  }

  let terrainText = "";

  for (const terrain in terrainBreakdown) {
    terrainText += `${terrain}: ${terrainBreakdown[terrain]} km`;
  }

  document.getElementById("totalDistance").textContent = totalDistance;
  document.getElementById("totalDuration").textContent = totalDuration;
  document.getElementById("averagePace").textContent = averagePace;
  document.getElementById("longestRun").textContent = longestRun;
  document.getElementById("terrainBreakdown").textContent = terrainText;
}

// Initial load
updateUI();
