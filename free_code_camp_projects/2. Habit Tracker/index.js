/* ======================================================
   PythonPath AI
   Learning Journey Dashboard
   index.js - Part A
======================================================*/

// ===========================================
// DOM Elements
// ===========================================

const topicList = document.getElementById("toplicList") || document.getElementById("topicList");

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const xpDisplay = document.getElementById("xp");
const levelDisplay = document.getElementById("level");
const levelValueDisplay = document.getElementById("levelValue");
const streakDisplay = document.getElementById("streak");
const completedDisplay = document.getElementById("completed");

const promptTitle = document.getElementById("promptTitle");
const promptText = document.getElementById("promptText");

const challenge = document.getElementById("challenge");

const notes = document.getElementById("notes");
const reflection = document.getElementById("reflection");

const saveNotes = document.getElementById("saveNotes");
const saveReflection = document.getElementById("saveReflection");

const generateLessonBtn = document.getElementById("generateLessonBtn");

// AI Assistant modal elements
const aiModal = document.getElementById("aiModal");
const closeAiModal = document.getElementById("closeAiModal");
const closeAiModalFooter = document.getElementById("closeAiModalFooter");
const aiGeneratedContent = document.getElementById("aiGeneratedContent");
const aiQuiz = document.getElementById("aiQuiz");

const languageBtn = document.getElementById("languageBtn");
const languageModal = document.getElementById("languageModal");
const targetLanguageInput = document.getElementById("targetLanguage");
const sourceLanguageInput = document.getElementById("sourceLanguage");
const saveLanguages = document.getElementById("saveLanguages");
const cancelLanguages = document.getElementById("cancelLanguages");
const learningJourneyText = document.getElementById("learningJourneyText");

const darkModeBtn = document.getElementById("darkModeBtn");

// ===========================================
// Dashboard Values
// ===========================================

let xp = Number(localStorage.getItem("xp")) || 0;

let streak = Number(localStorage.getItem("streak")) || 0;

const validModes = ["Beginner", "Advance", "Quiz Mode", "Tutor Mode"];

let selectedMode = validModes.includes(localStorage.getItem("learningMode"))
  ? localStorage.getItem("learningMode")
  : "Beginner";

let currentTopic = null;

let targetLanguage = localStorage.getItem("targetLanguage") || "Python";
let sourceLanguage = localStorage.getItem("sourceLanguage") || "JavaScript";

// ===========================================
// Learning Journey
// ===========================================

let roadmap = [];

function buildRoadmap() {
  return [
    {
      phase: "Phase 1",
      title: `Language Fundamentals for ${targetLanguage}`,
      lessons: [
        `${sourceLanguage} vs ${targetLanguage} Syntax`,
        `Typing and Variables in ${targetLanguage}`,
        `${targetLanguage} Control Flow and Functions`,
        `${sourceLanguage} to ${targetLanguage} Comparison`,
        "Phase 1 Verification Project",
      ],
    },
    {
      phase: "Phase 2",
      title: `Object-Oriented Programming in ${targetLanguage}`,
      lessons: [
        `Classes in ${targetLanguage}`,
        `Constructors and Initializers`,
        `Methods and Instance Behavior`,
        `Inheritance and Interfaces`,
        "Phase 2 Verification Project",
      ],
    },
    {
      phase: "Phase 3",
      title: `${targetLanguage} Features and Style`,
      lessons: [
        `${targetLanguage} Collections and Data Structures`,
        `Exception Handling in ${targetLanguage}`,
        `Modules and Packages`,
        `${targetLanguage} Comprehensions and Iteration`,
        "Phase 3 Verification Project",
      ],
    },
    {
      phase: "Phase 4",
      title: `${targetLanguage} Ecosystem and Tooling`,
      lessons: [
        `${targetLanguage} Environment Setup`,
        `Package Management for ${targetLanguage}`,
        `Testing with ${targetLanguage}`,
        `${targetLanguage} Standard Library`,
        "Phase 4 Verification Project",
      ],
    },
  ];
}

function refreshRoadmap() {
  roadmap = buildRoadmap();

  const preservedLessons = Object.fromEntries(
    Object.entries(completedLessons).filter(([lesson]) =>
      roadmap.some((phase) => phase.lessons.includes(lesson)),
    ),
  );

  completedLessons = preservedLessons;

  localStorage.setItem("roadmap", JSON.stringify(roadmap));

  totalLessons = roadmap.reduce(
    (total, phase) => total + phase.lessons.length,
    0,
  );

  renderRoadmap();
}


// ===========================================
// Lesson Progress
// ===========================================

let completedLessons =
  JSON.parse(localStorage.getItem("completedLessons")) || {};

// ===========================================
// AI Prompt Template
// ===========================================

function formatLearningJourney() {
  return `Mastering ${targetLanguage} Coming from ${sourceLanguage}`;
}

function generateCorePrompt(topic) {
  return `# Learning Journey Example: Mastering ${targetLanguage} Coming from ${sourceLanguage}

**End Goal: Develop proficiency in ${targetLanguage} for real-world development while building on experience with ${sourceLanguage}.**

## Phase 1: Language Fundamentals
- Prerequisite: Basic programming knowledge in ${sourceLanguage}
- Learning Steps:
  1. ${targetLanguage} syntax basics and differences from ${sourceLanguage}
  2. Understanding static typing vs. dynamic typing
  3. ${targetLanguage} variable declarations and primitive types
  4. Control structures and how they differ from ${sourceLanguage}
  5. Verification: Write a simple program converting a ${sourceLanguage} script to ${targetLanguage}

## Phase 2: Object-Oriented Programming in ${targetLanguage}
- Prerequisite: Understand ${targetLanguage} syntax basics
- Learning Steps:
  1. Class structure and declaration
  2. Constructors, methods, and fields
  3. Access modifiers (public, private, protected)
  4. Inheritance and interfaces
  5. Verification: Design a class hierarchy implementing a simple concept

## Phase 3: ${targetLanguage}-Specific Features
- Prerequisite: OOP understanding in ${targetLanguage}
- Learning Steps:
  1. Collections Framework (vs. ${sourceLanguage} collections)
  2. Exception handling
  3. Generics
  4. Lambda expressions and functional interfaces
  5. Verification: Refactor code to use appropriate collections and lambda expressions

## Phase 4: ${targetLanguage} Ecosystem and Tooling
- Prerequisite: Core ${targetLanguage} knowledge
- Learning Steps:
  1. Build tools (Maven/Gradle)
  2. Testing frameworks (JUnit)
  3. ${targetLanguage} standard libraries
  4. Common third-party libraries
  5. Verification: Create a project with proper structure, dependencies, and tests
`;
}

function generatePrompt(topic, mode = selectedMode) {
  if (mode === "Advance") {
    return `I'm building on my ${targetLanguage} foundation and want a more advanced learning experience.

I am currently studying:

${topic}

Please help me by:

1. Explaining the topic at an intermediate-to-advanced level.

2. Highlighting the most important ${targetLanguage}-specific concepts involved.

3. Comparing the ${targetLanguage} approach with the ${sourceLanguage} equivalent.

4. Showing one more challenging example.

5. Giving me one practical exercise that pushes my understanding further.

Do NOT provide the full solution unless I ask.

Use concise but detailed explanations.`;
  }

  if (mode === "Quiz Mode") {
    return `I want to learn ${topic} through quiz-style practice.

Please:

1. Create 5 short quiz questions about this topic.

2. Make the questions progressively harder.

3. Include the correct answers after the questions.

4. Add one brief explanation for each answer.

5. Keep the questions focused on ${targetLanguage} concepts and common mistakes for ${sourceLanguage} learners.`;
  }

  if (mode === "Tutor Mode") {
    return `Act as my tutor while I learn ${topic}.

Please:

1. Explain the topic in a beginner-friendly way.

2. Break it into small, easy-to-follow steps.

3. Compare it to ${sourceLanguage} where helpful.

4. Provide one worked example.

5. End with one practice exercise and hints instead of the full solution.`;
  }

  return `${generateCorePrompt()}

I am currently studying:

${topic}

Before diving in, could you:

1. List the key technical terms I should know in ${targetLanguage} that don't exist in ${sourceLanguage}.

2. Provide a brief explanation of each term.

3. Show how these terms relate to each other.

4. Compare this topic with the equivalent concept in ${sourceLanguage}.

5. Explain the common mistakes ${sourceLanguage} developers make when learning this topic.

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

let totalLessons = 0;

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
  if (xp >= 2000) return `${targetLanguage} Master`;

  if (xp >= 1500) return `${targetLanguage} Professional`;

  if (xp >= 1000) return `${targetLanguage} Explorer`;

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
    percentage + "% of your " + targetLanguage + " Learning Journey Complete";

  xpDisplay.textContent = xp + " XP";

  streakDisplay.textContent = streak + " Days";

  levelDisplay.value = selectedMode;

  levelValueDisplay.textContent =
    selectedMode === "Beginner" ? getLevel() : selectedMode;

  completedDisplay.textContent = completedCount + " / " + totalLessons;
}

// ===========================================
// Learn Lesson
// ===========================================

function learnLesson(topic) {
  currentTopic = topic;

  promptTitle.textContent = topic;

  promptText.value = generatePrompt(topic, selectedMode);

  const modeChallenge =
    selectedMode === "Advance"
      ? `Apply ${topic} in a more challenging ${targetLanguage} exercise.`
      : selectedMode === "Quiz Mode"
        ? `Create a short quiz about ${topic}.`
        : selectedMode === "Tutor Mode"
          ? `Teach ${topic} step by step as if guiding a beginner.`
          : challenges[topic] ||
            `Build a small ${targetLanguage} project that practices ${topic} and compares it with ${sourceLanguage}.`;

  challenge.textContent = modeChallenge;

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

let expandedPhaseIndex = 0;

function renderRoadmap() {
  topicList.innerHTML = "";

  roadmap.forEach((phase, phaseIndex) => {
    const phaseItem = document.createElement("li");

    phaseItem.className = "phase-item";

    const phaseToggle = document.createElement("button");

    phaseToggle.type = "button";

    phaseToggle.className = "phase-toggle";

    if (expandedPhaseIndex === phaseIndex) {
      phaseToggle.classList.add("active");
    }

    phaseToggle.innerHTML = `
      <span>${phase.phase} · ${phase.title}</span>
      <span class="phase-arrow">${expandedPhaseIndex === phaseIndex ? "▾" : "▸"}</span>
    `;

    phaseToggle.onclick = () => {
      expandedPhaseIndex = expandedPhaseIndex === phaseIndex ? -1 : phaseIndex;

      renderRoadmap();
    };

    const phaseContent = document.createElement("div");

    phaseContent.className = "phase-content";

    if (expandedPhaseIndex !== phaseIndex) {
      phaseContent.classList.add("hidden");
    }

    const lessonsList = document.createElement("ul");

    lessonsList.className = "phase-lessons";

    phase.lessons.forEach((topic) => {
      const li = document.createElement("li");

      li.className = "lesson-row";

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

      const learnBtn = document.createElement("button");

      learnBtn.textContent = "Learn";

      learnBtn.className = "learnBtn";

      learnBtn.onclick = () => {
        learnLesson(topic);
      };

      const completeBtn = document.createElement("button");

      completeBtn.textContent = completedLessons[topic] ? "Done" : "Complete";

      completeBtn.className = "completeBtn";

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

      lessonsList.appendChild(li);
    });

    phaseContent.appendChild(lessonsList);

    phaseItem.appendChild(phaseToggle);

    phaseItem.appendChild(phaseContent);

    topicList.appendChild(phaseItem);
  });

  updateDashboard();
}

// ===========================================
// Daily Motivation
// ===========================================

function showQuote() {
  const random = Math.floor(Math.random() * quotes.length);

  console.log("Today's Motivation:", quotes[random]);
}

function updateLearningJourneyText() {
  learningJourneyText.textContent = formatLearningJourney();
}

function showLanguageModal() {
  targetLanguageInput.value = targetLanguage;
  sourceLanguageInput.value = sourceLanguage;
  languageModal.classList.remove("hidden");
}

function hideLanguageModal() {
  languageModal.classList.add("hidden");
}

function saveLanguageSelection() {
  const target = targetLanguageInput.value.trim() || "Python";
  const source = sourceLanguageInput.value.trim() || "JavaScript";

  targetLanguage = target;
  sourceLanguage = source;

  localStorage.setItem("targetLanguage", targetLanguage);
  localStorage.setItem("sourceLanguage", sourceLanguage);

  updateLearningJourneyText();
  refreshRoadmap();

  if (currentTopic) {
    learnLesson(currentTopic);
  }

  hideLanguageModal();
}

// ===========================================
// Initialize Dashboard
// ===========================================

updateLearningJourneyText();
refreshRoadmap();

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

function showAIModal() {
  aiModal.classList.remove("hidden");
}

function hideAIModal() {
  aiModal.classList.add("hidden");
  aiGeneratedContent.innerHTML = "";
  aiQuiz.innerHTML = "";
}

async function generateAI(prompt) {
  // Configure this endpoint to point to your backend AI proxy.
  // If `AI_API_ENDPOINT` is empty, the function will simulate a response.
  const AI_API_ENDPOINT = "";

  if (!prompt) {
    alert("Please select a lesson first.");
    return;
  }

  showAIModal();

  aiGeneratedContent.innerHTML = "<p>Generating lesson...</p>";

  try {
    let result;

    if (AI_API_ENDPOINT) {
      const res = await fetch(AI_API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      result = await res.json();
    } else {
      // Simulation fallback for offline/demo use
      const lines = prompt.split("\n").slice(0, 10);

      result = {
        content: `<h3>${promptTitle.textContent}</h3><p>${lines.join(" ")}</p><p>This is a simulated lesson. Connect a backend AI endpoint for richer content.</p>`,
        quiz: [
          {
            id: 1,
            question: `What is one key idea from ${promptTitle.textContent}?`,
            choices: ["A", "B", "C", "D"],
            answer: 0,
          },
          {
            id: 2,
            question: `True or False: Practicing small exercises helps learning.`,
            choices: ["True", "False"],
            answer: 0,
          },
        ],
      };
    }

    renderAIResult(result);
  } catch (err) {
    aiGeneratedContent.innerHTML = `<p>Error generating lesson: ${err.message}</p>`;
  }
}

function renderAIResult(result) {
  aiGeneratedContent.innerHTML = result.content || "<p>No content returned.</p>";

  // Render quiz
  aiQuiz.innerHTML = "";

  if (result.quiz && result.quiz.length) {
    const form = document.createElement("form");

    result.quiz.forEach((q, idx) => {
      const fieldset = document.createElement("fieldset");

      const legend = document.createElement("legend");

      legend.textContent = `${idx + 1}. ${q.question}`;

      fieldset.appendChild(legend);

      q.choices.forEach((choice, cIdx) => {
        const label = document.createElement("label");

        label.className = "quiz-choice";

        const input = document.createElement("input");

        input.type = "radio";

        input.name = `q-${q.id}`;

        input.value = cIdx;

        label.appendChild(input);

        label.appendChild(document.createTextNode(" " + choice));

        fieldset.appendChild(label);
      });

      form.appendChild(fieldset);
    });

    const submit = document.createElement("button");

    submit.type = "button";

    submit.textContent = "Submit Quiz";

    submit.addEventListener("click", () => {
      let score = 0;

      result.quiz.forEach((q) => {
        const sel = form.querySelector(`input[name=\`q-${q.id}\`]:checked`);

        if (sel && Number(sel.value) === q.answer) score++;
      });

      alert(`Quiz completed. Score: ${score} / ${result.quiz.length}`);
    });

    form.appendChild(submit);

    aiQuiz.appendChild(form);
  }
}

// Wire modal close handlers
if (aiModal) {
  aiModal.addEventListener("click", (e) => {
    if (e.target === aiModal) hideAIModal();
  });
}

if (closeAiModal) closeAiModal.addEventListener("click", hideAIModal);
if (closeAiModalFooter) closeAiModalFooter.addEventListener("click", hideAIModal);

languageBtn.addEventListener("click", showLanguageModal);
saveLanguages.addEventListener("click", saveLanguageSelection);
cancelLanguages.addEventListener("click", hideLanguageModal);

languageModal.addEventListener("click", (event) => {
  if (event.target === languageModal) {
    hideLanguageModal();
  }
});

// ===========================================
// Learning Mode Selector
// ===========================================

levelDisplay.addEventListener("change", () => {
  selectedMode = levelDisplay.value;

  localStorage.setItem("learningMode", selectedMode);

  updateDashboard();

  if (currentTopic) {
    learnLesson(currentTopic);
  }
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

// Generate lesson with AI assistant
if (generateLessonBtn) {
  generateLessonBtn.addEventListener("click", () => {
    if (!currentTopic) {
      alert("Please select a lesson first.");
      return;
    }

    generateAI(promptText.value);
  });
}

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

renderRoadmap();

// ===========================================
// Welcome
// ===========================================

console.log("🐍 Welcome to PythonPath AI");

console.log(`Learning Journey: Mastering ${targetLanguage} from ${sourceLanguage}`);

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

Mastering ${targetLanguage}

Coming from ${sourceLanguage}

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
