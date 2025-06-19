function giveReferralBonus(bonusAmount) {
  const ref = localStorage.getItem("referral"); // this is the referrer ID or username
  if (!ref) return;

  const referrals = JSON.parse(localStorage.getItem("referralEarnings") || "{}");
  referrals[ref] = (referrals[ref] || 0) + bonusAmount;
  localStorage.setItem("referralEarnings", JSON.stringify(referrals));
}
