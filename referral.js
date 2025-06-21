function getReferral(){
  const ref=localStorage.getItem("ref")||"ABC123"; // replace with real link
  navigator.clipboard.writeText(ref);
  alert("Referral link copied!");
}
