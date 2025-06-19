// File: taskwithdraw.js
document.getElementById("taskWithdrawForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const wallet = document.getElementById("taskWallet").value;
  const amount = document.getElementById("taskAmount").value;

  document.getElementById("taskWithdrawMessage").innerText =
    `✅ Task Withdraw request of ${amount} DOGE sent to ${wallet}`;
});
