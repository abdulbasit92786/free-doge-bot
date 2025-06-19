// withdraw.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("withdrawForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const amount = document.getElementById("amount").value.trim();
    const address = document.getElementById("wallet").value.trim();
    const method = document.getElementById("method").value;
    const telegramId = Telegram.WebApp.initDataUnsafe.user.id;

    if (!amount || !address) {
      alert("Please fill in all fields.");
      return;
    }

    const data = {
      amount: amount,
      address: address,
      method: method,
      telegramId: telegramId
    };

    fetch("https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: <YOUR_ADMIN_CHAT_ID>,
        text: `💸 New Withdraw Request:\n\n👤 User: ${telegramId}\n💰 Amount: ${amount}\n📬 Address: ${address}\n💳 Method: ${method}`
      })
    })
      .then(response => {
        if (response.ok) {
          alert("✅ Withdraw request sent successfully!");
          form.reset();
        } else {
          alert("❌ Error sending request.");
        }
      })
      .catch(error => {
        alert("❌ Failed to send request.");
        console.error(error);
      });
  });
});
