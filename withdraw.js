document.getElementById("withdrawForm").addEventListener("submit", e=>{
  e.preventDefault();
  const w=document.getElementById("wallet").value;
  const a=parseFloat(document.getElementById("amount").value);
  const bal=parseFloat(localStorage.getItem("taskEarnings")||"0");
  if(!w||!a) return alert("Fill fields");
  if(a<10||a>bal) return alert("Invalid amount");
  localStorage.setItem("taskEarnings",(bal-a).toFixed(2));
  alert("✅ Withdraw Requested. Admin will review.");
  window.location="withdraw-history.html";
});
