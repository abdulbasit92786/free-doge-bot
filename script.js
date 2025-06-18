let balance = 0;

document.getElementById("tapButton").onclick = function() {
  balance += 0.01;
  document.getElementById("balance").innerText = `💸 Balance: ${balance.toFixed(2)} DOGE`;
};

// Referral Link Simulation
const userId = new URLSearchParams(window.location.search).get("user");
if (userId) {
  document.getElementById("refLink").innerText = `https://t.me/yourbot?start=${userId}`;
}
