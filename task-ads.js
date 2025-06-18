// task-ads.js
function showAdTasks() {
    const tasks = [
        {
            title: "Watch a short video",
            link: "https://example.com/video1",
            reward: 0.5
        },
        {
            title: "Visit a sponsor site",
            link: "https://example.com/site1",
            reward: 0.25
        }
    ];

    let taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        let item = document.createElement("div");
        item.innerHTML = `
            <h3>${task.title}</h3>
            <a href="${task.link}" target="_blank">Do Task</a>
            <p>Reward: ${task.reward} DOGE</p>
        `;
        taskList.appendChild(item);
    });
}

document.addEventListener("DOMContentLoaded", showAdTasks);
