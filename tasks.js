// File: tasks.js
const taskContainer = document.getElementById("taskList");

tasks.forEach(task => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>${task.title}</h3>
    <p>💰 Reward: ${task.reward}</p>
    <a href="${task.url}" target="_blank">
      <button>Start Task</button>
    </a>
    <hr>
  `;
  taskContainer.appendChild(div);
});
