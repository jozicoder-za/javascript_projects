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
}
