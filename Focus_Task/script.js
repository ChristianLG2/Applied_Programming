let tasks = [];
const activeTimers = {};

// Add task
document.getElementById('taskForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const input = document.getElementById('taskInput');
  const priority = document.getElementById('taskPriority').value;
  const text = input.value.trim();

  try {
    if (!text) throw new Error("Task cannot be empty");

    const task = {
      text,
      completed: false,
      timestamp: new Date(),
      priority: priority
    };

    tasks.push(task);
    input.value = "";
    renderTasks();

    Toastify({
      text: "Task added!",
      duration: 2000,
      gravity: "top",
      backgroundColor: "#4CAF50"
    }).showToast();

  } catch (err) {
    Toastify({
      text: err.message,
      duration: 2000,
      gravity: "top",
      backgroundColor: "#f44336"
    }).showToast();
  }
});

// Render task list
function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = `${task.completed ? "complete" : ""} priority-${task.priority}`;

    const taskId = `task-${index}`;
    const color = task.priority === "Gold" ? "#FFD700" :
                  task.priority === "Silver" ? "#C0C0C0" :
                  "#CD7F32";

    const activeText = task.completed && task.completedAt
      ? `✅ Completed after ${getElapsedTime(task.timestamp, task.completedAt)}`
      : `Active for 0 sec`;

    li.innerHTML = `
      <span>
        <strong style="color:${color}">${task.priority}</strong>: ${task.text}<br/>
        <small id="${taskId}-timestamp">${moment(task.timestamp).format("LT")}</small>
      </span>
      <div class="status">
        <small id="${taskId}-active">${activeText}</small>
      </div>
      <div>
        <button onclick="toggleTask(${index})">✓</button>
        <button onclick="deleteTask(${index})">🗑</button>
        <button onclick="moveUp(${index})">⬆️</button>
        <button onclick="moveDown(${index})">⬇️</button>
      </div>
    `;

    list.appendChild(li);
    updateActiveTime(index);
  });
}

// Live time updater
function updateActiveTime(index) {
  const task = tasks[index];
  const activeId = `task-${index}-active`;

  if (activeTimers[activeId]) {
    clearInterval(activeTimers[activeId]);
  }

  if (task.completed) return;

  function refresh() {
    const now = new Date();
    const elapsed = Math.floor((now - new Date(task.timestamp)) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    const text = `Active for ${minutes > 0 ? minutes + " min " : ""}${seconds} sec`;

    const element = document.getElementById(activeId);
    if (element && !task.completed) {
      element.textContent = text;
    }
  }

  refresh();
  activeTimers[activeId] = setInterval(refresh, 1000);
}

// Format completed time
function getElapsedTime(start, end) {
  const elapsed = Math.floor((new Date(end) - new Date(start)) / 1000);
  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;
  return `${minutes > 0 ? minutes + " min " : ""}${seconds} sec`;
}

// Toggle task complete/incomplete
function toggleTask(index) {
  const task = tasks[index];
  if (!task.completed) {
    task.completed = true;
    task.completedAt = new Date();
  } else {
    task.completed = false;
    delete task.completedAt;
  }
  renderTasks();
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Move task
function moveUp(index) {
  if (index === 0) return;
  [tasks[index - 1], tasks[index]] = [tasks[index], tasks[index - 1]];
  renderTasks();
}

function moveDown(index) {
  if (index === tasks.length - 1) return;
  [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];
  renderTasks();
}

// Pomodoro timer
document.getElementById('startPomodoro').addEventListener('click', () => {
  startPomodoro(25 * 60); // 25 minutes
});

function startPomodoro(secondsLeft) {
  if (secondsLeft < 0) {
    const sound = document.getElementById("pomodoro-sound");
    if (sound) sound.play();

    Toastify({
      text: "Pomodoro session complete! Take a break.",
      duration: 3000,
      gravity: "top",
      backgroundColor: "#2196f3"
    }).showToast();
    return;
  }

  const minutes = Math.floor(secondsLeft / 60).toString().padStart(2, '0');
  const seconds = (secondsLeft % 60).toString().padStart(2, '0');
  document.getElementById('timer').textContent = `${minutes}:${seconds}`;

  setTimeout(() => startPomodoro(secondsLeft - 1), 1000);
}
