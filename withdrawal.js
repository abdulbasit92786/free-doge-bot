function requestWithdraw() {
  const wallet = document.getElementById("wallet").value.trim();
  const amount = document.getElementById("amount").value.trim();

  if (!wallet || !amount) {
    alert("Please fill in all fields.");
    return;
  }

  let history = JSON.parse(localStorage.getItem("withdrawals")) || [];
  const record = {
    wallet,
    amount,
    date: new Date().toLocaleString()
  };
  history.unshift(record);
  localStorage.setItem("withdrawals", JSON.stringify(history));

  alert("✅ Withdrawal submitted!");
  showHistory();
}

function showHistory() {
  const history = JSON.parse(localStorage.getItem("withdrawals")) || [];
  const container = document.getElementById("history");
  container.innerHTML = history.length
    ? history.map(h => `
        <div class="history-item">
          <p><b>Wallet:</b> ${h.wallet}</p>
          <p><b>Amount:</b> ${h.amount}</p>
          <p><b>Date:</b> ${h.date}</p>
        </div>
      `).join("")
    : "<p>No withdrawal history.</p>";
}

window.onload = showHistory;
