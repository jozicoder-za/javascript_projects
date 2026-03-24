const runs = [];

function addRun() {
  const distance = Number(document.getElementById("distance").value);
  const duration = Number(document.getElementById("duration").value);
  const terrain = document.getElementById("terrain").value;

  if (distance <= 0 || duration <= 0) {
    alert("Please enter  valid values");
  }

  runs.push({ distance, duration, terrain });

  updateUI();
}

function updateUI() {
  let totalDistance = 0;
  let totalDuration = 0;
  let longestRun = 0;
  let terrainBreakdown = {};

  const runList = document.getElementById("runList");
  runList.innerHTML = "";

  for (const run of runs) {
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

    runList.appendChild(div);
  }

  let averagePace = 0;

  if (totalDistance > 0) {
    averagePace = (totalDuration / totalDistance).toFixed(2);
  }

  document.getElementById("totalDistance").textContent = totalDistance;
  document.getElementById("totalDuration").textContent = totalDuration;
  document.getElementById("averagePace").textContent = averagePace;
  document.getElementById("longestRun").textContent = longestRun;
}
