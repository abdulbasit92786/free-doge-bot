function claimTask(){
  let earnings = parseFloat(localStorage.getItem("taskEarnings")||"0");
  earnings += 1;
  localStorage.setItem("taskEarnings",earnings.toFixed(2));
  alert("✅ 1 DOGE credited!");
}
