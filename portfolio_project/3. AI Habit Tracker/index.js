/* ======================================================
   PythonPath AI
   Learning Journey Dashboard
   index.js - Part A
======================================================*/

// ===========================================
// DOM Elements
// ===========================================

const topicList = document.getElementById("topicList");

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const xpDisplay = document.getElementById("xp");
const levelDisplay = document.getElementById("level");
const streakDisplay = document.getElementById("streak");
const completedDisplay = document.getElementById("completed");

const promptTitle = document.getElementById("promptTitle");
const promptText = document.getElementById("promptText");

const challenge = document.getElementById("challenge");

const notes = document.getElementById("notes");
const reflection = document.getElementById("reflection");

const saveNotes = document.getElementById("saveNotes");
const saveReflection = document.getElementById("saveReflection");

const copyPrompt = document.getElementById("copyPrompt");

const darkModeBtn = document.getElementById("darkModeBtn");

// ===========================================
// Dashboard Values
// ===========================================

let xp = Number(localStorage.getItem("xp")) || 0;

let streak = Number(localStorage.getItem("streak")) || 0;

// ===========================================
// Learning Journey
// ===========================================

let roadmap = JSON.parse(localStorage.getItem("roadmap")) || [
  {
    phase: "Phase 1",
    title: "Language Fundamentals",

    lessons: [
      "JavaScript vs Python Syntax",

      "Static vs Dynamic Typing",

      "Variables and Primitive Types",

      "Control Structures",

      "Phase 1 Verification Project",
    ],
  },

  {
    phase: "Phase 2",
    title: "Object-Oriented Programming",

    lessons: [
      "Classes",

      "Constructors",

      "Methods",

      "Inheritance",

      "Phase 2 Verification Project",
    ],
  },

  {
    phase: "Phase 3",
    title: "Python Features",

    lessons: [
      "Lists vs Arrays",

      "Dictionaries",

      "Exception Handling",

      "List Comprehensions",

      "Lambda Functions",

      "Phase 3 Verification Project",
    ],
  },

  {
    phase: "Phase 4",
    title: "Python Ecosystem",

    lessons: [
      "Virtual Environments",

      "pip",

      "Pytest",

      "Python Standard Library",

      "Phase 4 Verification Project",
    ],
  },
];

// ===========================================
// Lesson Progress
// ===========================================

let completedLessons =
  JSON.parse(localStorage.getItem("completedLessons")) || {};

// ===========================================
// AI Prompt Template
// ===========================================

function generatePrompt(topic) {
  return `I'm beginning to learn Python coming from JavaScript.

I am currently studying:

${topic}

Before diving in, could you:

1. List the key technical terms I should know in Python that don't exist in JavaScript.

2. Provide a brief explanation of each term.

3. Show how these terms relate to each other.

4. Compare this topic with the equivalent concept in JavaScript.

5. Explain the common mistakes JavaScript developers make when learning this topic.

6. Give me two beginner examples.

7. Give me one practical coding exercise.

Do NOT provide the solution unless I ask.

Use simple language and explain concepts step by step.`;
}

// ===========================================
// Verification Challenges
// ===========================================

const challenges = {
  "JavaScript vs Python Syntax":
    "Rewrite a small JavaScript program in Python.",

  "Static vs Dynamic Typing":
    "Create variables of different Python data types and print their types.",

  "Variables and Primitive Types":
    "Create variables representing a student profile.",

  "Control Structures":
    "Write a Python program that determines whether a student passed an exam.",

  "Phase 1 Verification Project":
    "Build a mini project using everything from this phase.",

  Classes: "Create a Student class.",

  Constructors: "Add an __init__ constructor to your Student class.",

  Methods: "Create methods to display student information.",

  Inheritance: "Create a Person class and inherit Student from it.",

  "Lists vs Arrays": "Store ten programming languages in a Python list.",

  Dictionaries: "Create a dictionary representing a book.",

  "Exception Handling": "Prevent a division-by-zero error.",

  "List Comprehensions": "Create a list of squares using a list comprehension.",

  "Lambda Functions": "Sort a list of students by age using lambda.",

  "Virtual Environments": "Create and activate a virtual environment.",

  pip: "Install the requests package.",

  Pytest: "Write your first unit test.",

  "Python Standard Library": "Create a program using the datetime module.",
};

// ===========================================
// Motivational Quotes
// ===========================================

const quotes = [
  "Code a little every day.",

  "Learning happens through practice.",

  "Compare Python with JavaScript whenever possible.",

  "Don't memorise syntax—understand concepts.",

  "AI is your tutor, not your replacement.",

  "Consistency beats intensity.",

  "Every bug teaches something new.",
];

// ===========================================
// Total Lessons
// ===========================================

const totalLessons = roadmap.reduce(
  (total, phase) => total + phase.lessons.length,

  0,
);

/* ======================================================
   PythonPath AI
   index.js - Part B
   Rendering & Progress
======================================================*/

// ===========================================
// Save Data
// ===========================================

function saveData() {
  localStorage.setItem("completedLessons", JSON.stringify(completedLessons));

  localStorage.setItem("xp", xp);

  localStorage.setItem("streak", streak);
}

// ===========================================
// Level System
// ===========================================

function getLevel() {
  if (xp >= 2000) return "Python Master";

  if (xp >= 1500) return "Python Professional";

  if (xp >= 1000) return "Python Explorer";

  if (xp >= 750) return "Intermediate";

  if (xp >= 300) return "Beginner+";

  return "Beginner";
}

// ===========================================
// Progress Dashboard
// ===========================================

function updateDashboard() {
  const completedCount = Object.keys(completedLessons).length;

  const percentage = Math.round((completedCount / totalLessons) * 100);

  progressBar.style.width = percentage + "%";

  progressText.textContent =
    percentage + "% of your Python Learning Journey Complete";

  xpDisplay.textContent = xp + " XP";

  streakDisplay.textContent = streak + " Days";

  levelDisplay.textContent = getLevel();

  completedDisplay.textContent = completedCount + " / " + totalLessons;
}

// ===========================================
// Learn Lesson
// ===========================================

function learnLesson(topic) {
  promptTitle.textContent = topic;

  promptText.value = generatePrompt(topic);

  challenge.textContent = challenges[topic] || "No challenge available.";

  // Scroll to Prompt

  const promptCard = document.querySelector(".prompt-card");

  promptCard.scrollIntoView({
    behavior: "smooth",

    block: "start",
  });

  promptCard.classList.add("highlight");

  setTimeout(() => {
    promptCard.classList.remove("highlight");
  }, 1200);
}

// ===========================================
// Complete Lesson
// ===========================================

function completeLesson(topic) {
  if (completedLessons[topic]) {
    return;
  }

  completedLessons[topic] = true;

  xp += 100;

  streak++;

  saveData();

  updateDashboard();

  renderRoadmap();
}

// ===========================================
// Render Learning Journey
// ===========================================

function renderRoadmap() {
  topicList.innerHTML = "";

  roadmap.forEach((phase) => {
    // Phase Heading

    const phaseHeading = document.createElement("li");

    phaseHeading.style.background = "#3776AB";

    phaseHeading.style.color = "white";

    phaseHeading.style.fontWeight = "bold";

    phaseHeading.style.fontSize = "18px";

    phaseHeading.style.cursor = "default";

    phaseHeading.innerHTML = `

            <div>

                ${phase.phase}

                <br>

                <small>${phase.title}</small>

            </div>

        `;

    topicList.appendChild(phaseHeading);

    // Lessons

    phase.lessons.forEach((topic) => {
      const li = document.createElement("li");

      const info = document.createElement("div");

      info.className = "topic-info";

      const checkbox = document.createElement("input");

      checkbox.type = "checkbox";

      checkbox.disabled = true;

      checkbox.checked = completedLessons[topic] || false;

      const title = document.createElement("span");

      title.textContent = topic;

      if (completedLessons[topic]) {
        title.classList.add("completed");
      }

      info.appendChild(checkbox);

      info.appendChild(title);

      const actions = document.createElement("div");

      // Learn Button

      const learnBtn = document.createElement("button");

      learnBtn.textContent = "Learn";

      learnBtn.className = "learnBtn";

      learnBtn.onclick = () => {
        learnLesson(topic);
      };

      // Complete Button

      const completeBtn = document.createElement("button");

      completeBtn.textContent = completedLessons[topic] ? "Done" : "Complete";

      completeBtn.className = "completeBtn";

      if (completedLessons[topic]) {
        completeBtn.disabled = true;
      }

      completeBtn.onclick = () => {
        completeLesson(topic);
      };

      actions.appendChild(learnBtn);

      actions.appendChild(completeBtn);

      li.appendChild(info);

      li.appendChild(actions);

      topicList.appendChild(li);
    });
  });
}

// ===========================================
// Daily Motivation
// ===========================================

function showQuote() {
  const random = Math.floor(Math.random() * quotes.length);

  console.log("Today's Motivation:", quotes[random]);
}

// ===========================================
// Initialize Dashboard
// ===========================================

updateDashboard();

renderRoadmap();

showQuote();

/* ======================================================
   PythonPath AI
   index.js - Part C
   Notes, Prompt, Theme & Learning Logic
======================================================*/

// ===========================================
// Load Saved Notes
// ===========================================

notes.value = localStorage.getItem("notes") || "";

reflection.value = localStorage.getItem("reflection") || "";

// ===========================================
// Save Notes
// ===========================================

saveNotes.addEventListener("click", () => {
  localStorage.setItem(
    "notes",

    notes.value,
  );

  alert("✅ Learning notes saved.");
});

// ===========================================
// Save Reflection
// ===========================================

saveReflection.addEventListener("click", () => {
  localStorage.setItem(
    "reflection",

    reflection.value,
  );

  alert("✅ Reflection saved.");
});

// ===========================================
// Auto Save
// ===========================================

notes.addEventListener("input", () => {
  localStorage.setItem(
    "notes",

    notes.value,
  );
});

reflection.addEventListener("input", () => {
  localStorage.setItem(
    "reflection",

    reflection.value,
  );
});

// ===========================================
// Copy AI Prompt
// ===========================================

copyPrompt.addEventListener("click", () => {
  if (promptText.value === "") {
    alert("Please select a lesson first.");

    return;
  }

  navigator.clipboard.writeText(promptText.value);

  alert("📋 AI Prompt copied.");
});

// ===========================================
// Dark Mode
// ===========================================

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem(
      "theme",

      "dark",
    );

    darkModeBtn.textContent = "☀️ Light Mode";
  } else {
    localStorage.setItem(
      "theme",

      "light",
    );

    darkModeBtn.textContent = "🌙 Dark Mode";
  }
});

// ===========================================
// Learning Progress Messages
// ===========================================

function celebrateProgress() {
  const completed = Object.keys(completedLessons).length;

  if (completed === 5) {
    alert("🎉 Great work!\n\nYou have completed Phase 1.");
  }

  if (completed === 10) {
    alert("🏆 Excellent!\n\nYou have completed Phase 2.");
  }

  if (completed === 16) {
    alert("🚀 Fantastic!\n\nYou have completed Phase 3.");
  }

  if (completed === 21) {
    alert("🐍 Congratulations!\n\nYou completed the Python Learning Journey!");
  }
}

// ===========================================
// Phase Locking
// ===========================================

function phaseCompleted(index) {
  if (index === 0) {
    return true;
  }

  const previous = roadmap[index - 1];

  return previous.lessons.every((lesson) => completedLessons[lesson]);
}

// ===========================================
// Unlock Messages
// ===========================================

function phaseMessage(index) {
  if (phaseCompleted(index)) {
    return "";
  }

  return;

  ("🔒 Complete the previous phase first.");
}

// ===========================================
// Override Render Roadmap
// ===========================================

const originalRender = renderRoadmap;

renderRoadmap = function () {
  topicList.innerHTML = "";

  roadmap.forEach((phase, phaseIndex) => {
    const phaseHeading = document.createElement("li");

    phaseHeading.style.background = "#3776AB";

    phaseHeading.style.color = "white";

    phaseHeading.style.fontWeight = "bold";

    phaseHeading.innerHTML = `

        <div>

        ${phase.phase}

        <br>

        <small>

        ${phase.title}

        </small>

        </div>

        `;

    topicList.appendChild(phaseHeading);

    phase.lessons.forEach((topic) => {
      const li = document.createElement("li");

      const info = document.createElement("div");

      info.className = "topic-info";

      const check = document.createElement("input");

      check.type = "checkbox";

      check.disabled = true;

      check.checked = completedLessons[topic] || false;

      const span = document.createElement("span");

      span.textContent = topic;

      if (completedLessons[topic]) {
        span.classList.add("completed");
      }

      info.appendChild(check);

      info.appendChild(span);

      const actions = document.createElement("div");

      const learnBtn = document.createElement("button");

      learnBtn.className = "learnBtn";

      learnBtn.textContent = "Learn";

      learnBtn.onclick = () => {
        learnLesson(topic);
      };

      const completeBtn = document.createElement("button");

      completeBtn.className = "completeBtn";

      completeBtn.textContent = completedLessons[topic] ? "Done" : "Complete";

      if (completedLessons[topic]) {
        completeBtn.disabled = true;
      }

      if (!phaseCompleted(phaseIndex)) {
        completeBtn.disabled = true;

        learnBtn.disabled = true;
      }

      completeBtn.onclick = () => {
        completeLesson(topic);

        celebrateProgress();
      };

      actions.appendChild(learnBtn);

      actions.appendChild(completeBtn);

      li.appendChild(info);

      li.appendChild(actions);

      topicList.appendChild(li);
    });
  });

  updateDashboard();
};

renderRoadmap();

// ===========================================
// Welcome
// ===========================================

console.log("🐍 Welcome to PythonPath AI");

console.log("Learning Journey: Mastering Python from JavaScript");

/* ======================================================
   PythonPath AI
   index.js - Part D
   Analytics & Professional Features
======================================================*/

// ===========================================
// Daily Motivation Card
// ===========================================

function displayMotivation() {
  const random = Math.floor(Math.random() * quotes.length);

  const roadmapSection = document.querySelector(".roadmap");

  const card = document.createElement("div");

  card.className = "card";

  card.style.marginBottom = "25px";

  card.innerHTML = `

        <h3>💡 Daily Motivation</h3>

        <p>${quotes[random]}</p>

    `;

  roadmapSection.prepend(card);
}

displayMotivation();

// ===========================================
// Learning Statistics
// ===========================================

function getStatistics() {
  const completed = Object.keys(completedLessons).length;

  const remaining = totalLessons - completed;

  return {
    completed,

    remaining,

    percentage: Math.round((completed / totalLessons) * 100),
  };
}

// ===========================================
// Export Progress
// ===========================================

function exportProgress() {
  const stats = getStatistics();

  const report = {
    xp,

    streak,

    level: getLevel(),

    completedLessons: stats.completed,

    remainingLessons: stats.remaining,

    progress: stats.percentage + "%",

    notes: notes.value,

    reflection: reflection.value,

    exported: new Date().toLocaleString(),
  };

  console.log(report);

  alert("Learning report exported to the browser console.");
}

window.exportProgress = exportProgress;

// ===========================================
// Study Recommendation
// ===========================================

function recommendLesson() {
  for (const phase of roadmap) {
    for (const lesson of phase.lessons) {
      if (!completedLessons[lesson]) {
        console.log(
          "📚 Recommended Lesson:",

          lesson,
        );

        return;
      }
    }
  }

  console.log("🏆 Learning Journey Completed!");
}

recommendLesson();

// ===========================================
// Study Time Estimate
// ===========================================

function estimateStudyTime() {
  const stats = getStatistics();

  const hours = stats.remaining * 2;

  console.log(
    "Estimated remaining study time:",

    hours,

    "hours",
  );
}

estimateStudyTime();

// ===========================================
// Achievement Badges
// ===========================================

function achievement() {
  const completed = Object.keys(completedLessons).length;

  if (completed >= 5) {
    console.log("🥉 Bronze Python Learner");
  }

  if (completed >= 10) {
    console.log("🥈 Silver Python Learner");
  }

  if (completed >= 15) {
    console.log("🥇 Gold Python Learner");
  }

  if (completed === totalLessons) {
    console.log("🏆 PythonPath Master");
  }
}

achievement();

// ===========================================
// Welcome Message
// ===========================================

console.log(`

=====================================

🐍 PythonPath AI

Learning Journey Dashboard

Mastering Python

Coming from JavaScript

=====================================

AI Prompt Template Demonstrated

✓ Using AI to Learn New Skills

✓ Structured Learning Journey

✓ Guided Prompt Engineering

✓ Reflection

✓ Verification Projects

=====================================

`);

// ===========================================
// Final Refresh
// ===========================================

updateDashboard();

renderRoadmap();
