// file: admin-panel.js

document.addEventListener("DOMContentLoaded", () => {
  const requests = JSON.parse(localStorage.getItem("withdrawRequests") || "[]");
  const container = document.getElementById("pending-requests");

  if (requests.length === 0) {
    container.innerHTML = "<p>✅ No pending requests.</p>";
    return;
  }

  requests.forEach((req, index) => {
    const div = document.createElement("div");
    div.className = "withdraw-request";
    div.innerHTML = `
      <p><strong>User:</strong> ${req.wallet}</p>
      <p><strong>Amount:</strong> ${req.amount} DOGE</p>
      <p><strong>Status:</strong> ${req.status}</p>
      <button onclick="approve(${index})">✅ Approve</button>
      <button onclick="reject(${index})">❌ Reject</button>
      <hr>
    `;
    container.appendChild(div);
  });
});

function approve(index) {
  updateStatus(index, "Approved");
}

function reject(index) {
  updateStatus(index, "Rejected");
}

function updateStatus(index, newStatus) {
  const requests = JSON.parse(localStorage.getItem("withdrawRequests") || "[]");
  requests[index].status = newStatus;
  localStorage.setItem("withdrawRequests", JSON.stringify(requests));
  location.reload(); // refresh to update UI
}
