document.getElementById("wdForm").onsubmit=async(e)=>{
  e.preventDefault();
  const wallet=...; const amount=parseFloat(...);
  if(amount<10||!wallet)return alert("Minimum 10 DOGE");
  let date = new Date().toISOString();
  await db.collection("withdrawals").add({wallet,amount,date,status:"processing"});
  alert("Request sent! Admin will process.");
};
