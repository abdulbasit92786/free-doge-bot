function getReferral(){
  let id = tg.initDataUnsafe.user.id;
  let url = window.location.href + "?ref=" + id;
  localStorage.setItem("refId",id);
  document.getElementById("referralLink").innerText = url;
}
window.onload = () => {
  let ref = new URL(location).searchParams.get("ref");
  let me = tg.initDataUnsafe.user.id;
  if(ref && ref!==me){
    let bonus = parseFloat(localStorage.getItem("refEarnings")||"0") + 0.28;
    localStorage.setItem("refEarnings",bonus);
    document.getElementById("refEarnings").innerText = bonus.toFixed(2);
    db.collection("referrals").add({referrer:ref, referee:me, amount:0.28, date:new Date()});
  }
};
