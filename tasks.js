let claimedVideo=false;
document.getElementById("videoTask").addEventListener("ended",()=>{
  claimedVideo=true;
  document.getElementById("claimVideo").disabled=false;
});

document.getElementById("claimVideo").onclick=async()=>{
  if(!claimedVideo)return alert("Watch first");
  let e = parseFloat(localStorage.getItem("taskEarnings")||"0");
  e+=1;
  localStorage.setItem("taskEarnings",e);
  document.getElementById("taskEarnings").innerText = e.toFixed(2);
  // Write to Firestore
  await db.collection("earnings").add({
    type:"task",userId:tg.initDataUnsafe.user.id,amount:1,date:new Date()
  });
  alert("Task claimed!");
};
