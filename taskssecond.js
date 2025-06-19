// File: tasks.js

const tasks = [
  {
    title: "Watch a short video and earn 0.5 DOGE",
    url: "https://example.com/video-task",
    reward: 0.5
  },
  {
    title: "Signup on Cointiply and earn 2 DOGE",
    url: "https://www.cointiply.com/?r=YOUR_REF_ID",
    reward: 2
  },
  {
    title: "Join TimeBucks & Earn 1 DOGE",
    url: "https://timebucks.com/?ref=YOUR_REF_ID",
    reward: 1
  }
];

let container = document.getElementById("taskList");

tasks.forEach(task => {
  let div = document.createElement("div");
  div.classList.add("task");

  div.innerHTML = `
    <h3>${task.title}</h3>
    <p>💰 Earn: ${task.reward} DOGE</p>
    <a href="${task.url}" target="_blank"><button>✅ Do Task</button></a>
    <hr>
  `;

  container.appendChild(div);
});
