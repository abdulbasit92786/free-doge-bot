// File: withdraw_tasks.js

function submitWithdraw() {
  const wallet = document.getElementById("wallet").value;
  const amount = document.getElementById("amount").value;
  const response = document.getElementById("response");

  if (!wallet || !amount) {
    response.innerText = "❌ Please fill all fields.";
    return;
  }

  if (amount < 3) {
    response.innerText = "❌ Minimum withdraw is 3 DOGE.";
    return;
  }

  // ✅ Save withdrawal history locally (for front-end only)
  let history = JSON.parse(localStorage.getItem("withdrawHistory")) || [];
  history.push({
    wallet: wallet,
    amount: amount,
    date: new Date().toLocaleString()
  });
  localStorage.setItem("withdrawHistory", JSON.stringify(history));

  // ✅ Send Telegram Message to Admin via Bot API
  const adminId = "7584161210"; // 🧑‍💻 Replace this
  const botToken = "7436258467:AAHOf0R4lMn21XrOrJGIt-L5IuYu3yR9phs"; // 🔐 Replace this

  const message = `🚀 *New Withdraw Request*\n\n👤 User: [Tap User]\n💳 Wallet: ${wallet}\n💰 Amount: ${amount} DOGE\n📅 Date: ${new Date().toLocaleString()}`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${adminId}&text=${encodeURIComponent(message)}&parse_mode=Markdown`;

  fetch(url)
    .then(res => {
      if (res.ok) {
        response.innerText = "✅ Withdrawal requested. Admin will review it.";
        document.getElementById("wallet").value = "";
        document.getElementById("amount").value = "";
      } else {
        response.innerText = "❌ Failed to send request. Try again.";
      }
    })
    .catch(err => {
      response.innerText = "⚠️ Network error.";
    });
}
