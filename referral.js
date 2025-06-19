const userId = localStorage.getItem("userId") || Math.floor(Math.random() * 1000000);
localStorage.setItem("userId", userId);

const referralLink = `${window.location.origin}/?ref=${userId}`;
document.getElementById("refLink").textContent = referralLink;
document.getElementById("refLink").href = referralLink;

let referredUsers = JSON.parse(localStorage.getItem("referredUsers")) || [];
document.getElementById("refCount").textContent = referredUsers.length;

if (window.location.search.includes("ref=")) {
  const refId = new URLSearchParams(window.location.search).get("ref");
  if (refId && refId !== userId) {
    referredUsers.push(refId);
    localStorage.setItem("referredUsers", JSON.stringify(referredUsers));
  }
}
