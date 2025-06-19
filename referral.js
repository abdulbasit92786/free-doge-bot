// File: referral.js
function getReferral() {
  const userId = "7584161210"; // Replace with dynamic user ID
  const referralLink = `${window.location.origin}/?ref=${userId}`;
  document.getElementById("referralLink").innerText = `Your referral link: ${referralLink}`;
}
