# 📋 Focus Task: Productivity Timer & To-Do Manager  
🎥 Video Walkthrough: ---

**Focus Task** is a browser-based productivity application that combines an interactive to-do list with a Pomodoro timer. Built with HTML, CSS, and JavaScript, it helps users stay focused, measure time spent on tasks, and visually prioritize activities.

---

## Why This App and These Features?

Time management is a key factor in personal and professional productivity. This tool was created to help users visually structure their work sessions and measure effort by integrating the Pomodoro Technique with task tracking. It goes beyond static to-do lists by offering:

- **Priority-Based Task Sorting**  
  Users can categorize tasks as **Gold**, **Silver**, or **Bronze** based on urgency or importance.

- **Live Task Timers**  
  Each active task displays a real-time counter showing how long it's been open.

- **Completion Time Tracking**  
  When a task is marked as complete, the app records and displays the total active time spent.

- **Pomodoro Timer with Audio Alert**  
  A recursive 25-minute timer designed to help users focus in short, effective sprints.

---

## Features

- Add, complete, delete, and reorder tasks  
- Assign task priority: Gold, Silver, Bronze  
- Live "Active for X" timer on each task  
- "Completed after X" display once marked done  
- Pomodoro timer with beep sound when session ends  
- Color-coded task priority visualization  
- Exception handling (e.g., empty task prevention)  
- Responsive design for mobile and desktop  
- Toast notifications for feedback and interaction

---

## Tools Used

**Frontend:**
- HTML5, CSS3, JavaScript (ES6+)
- [Toastify.js](https://www.npmjs.com/package/toastify-js) – Notifications  
- [Moment.js](https://momentjs.com/) – Time formatting

**Optional Deployment:** GitHub Pages

---

## 📁 Project Structure

├── index.html # Main HTML layout
├── style.css # Styling for the app
├── script.js # JS logic and interactivity
├── assets/
│ └── beep.mp3 # (Optional) local beep sound
└── README.md # Project documentation
