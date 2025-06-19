// Get the URL parameter
function getReferralCode() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('ref');
}

// Save referral code to localStorage
function saveReferralCode() {
  const refCode = getReferralCode();
  if (refCode && !localStorage.getItem('referral')) {
    localStorage.setItem('referral', refCode);
    document.getElementById("refStatus").innerText = "🎁 Referral Applied: " + refCode;
  }
}

// Display referral code (if already saved)
function showSavedReferral() {
  const refCode = localStorage.getItem('referral');
  if (refCode) {
    document.getElementById("refStatus").innerText = "🎁 Referral Applied: " + refCode;
  }
}

window.onload = function() {
  saveReferralCode();
  showSavedReferral();
};
