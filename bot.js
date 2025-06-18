let tg = window.Telegram.WebApp;
tg.expand();

let user_id = tg.initDataUnsafe.user.id;
let username = tg.initDataUnsafe.user.username;

document.getElementById("refLink").innerText =
  `https://t.me/your_bot_username?start=${user_id}`;

// Save click
document.getElementById("tapButton").addEventListener("click", () => {
  fetch(`https://your-api-server.com/updateBalance?user=${user_id}`, {
    method: "POST",
  });
});
