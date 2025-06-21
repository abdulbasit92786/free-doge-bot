// File: withdraw.js
document.getElementById("withdrawForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let wallet = document.getElementById("wallet").value.trim();
  let amount = parseFloat(document.getElementById("amount").value);
  let earnings = parseFloat(localStorage.getItem("taskEarnings") || 0);

  if (!wallet || isNaN(amount)) return alert("Fill all fields.");
  if (amount < 3) return alert("Minimum 3 DOGE.");
  if (amount > earnings) return alert("Not enough balance.");

  earnings -= amount;
  localStorage.setItem("taskEarnings", earnings.toFixed(2));

  let history = JSON.parse(localStorage.getItem("withdrawHistory") || "[]");
  history.unshift({
    wallet: wallet,
    amount: amount,
    date: new Date().toLocaleString(),
    status: "Processing"
  });
  localStorage.setItem("withdrawHistory", JSON.stringify(history));

  alert("✅ Withdraw request sent. In 'Processing' status.");
});
