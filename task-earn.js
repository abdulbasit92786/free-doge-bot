// file: task-earn.js

document.addEventListener("DOMContentLoaded", function () {
  const taskList = document.getElementById("task-list");

  const tasks = [
    {
      title: "🎥 Watch a 30-second Video",
      url: "https://www.youtube.com/watch?v=VIDEO_ID",
      reward: 0.5
    },
    {
      title: "🌐 Visit This Site",
      url: "https://your-cpa-offer.com",
      reward: 0.7
    },
    {
      title: "📱 Install this App",
      url: "https://play.google.com/store/apps/details?id=APP_ID",
      reward: 1.0
    }
  ];

  tasks.forEach(task => {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";

    taskItem.innerHTML = `
      <h3>${task.title}</h3>
      <p>Reward: ${task.reward} DOGE</p>
      <a class="task-btn" href="${task.url}" target="_blank" onclick="claimReward(${task.reward})">Do Task</a>
    `;

    taskList.appendChild(taskItem);
  });
});

function claimReward(amount) {
  alert(`🎉 You completed a task and earned ${amount} DOGE!`);
  // Optionally send info to Telegram bot or backend
        }
