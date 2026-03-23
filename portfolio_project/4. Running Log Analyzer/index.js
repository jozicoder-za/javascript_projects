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

function updateUI() {}
