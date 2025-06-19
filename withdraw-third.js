document.getElementById("withdraw-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const amount = document.getElementById("amount").value;
  const wallet = document.getElementById("wallet").value;
  const referrer = localStorage.getItem("ref") || "None";

  const message = `
📤 *New Withdraw Request!*
👤 Username: ${username}
💰 Amount: ${amount} DOGE
💼 Wallet: ${wallet}
👥 Referred by: ${referrer}
  `;

  const TOKEN = "YOUR_BOT_TOKEN";
  const CHAT_ID = "YOUR_ADMIN_CHAT_ID";
  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const data = {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: "Markdown"
  };

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        alert("Withdraw request sent!");
        document.getElementById("withdraw-form").reset();
      } else {
        alert("Error sending request.");
      }
    });
});
