function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const ref = getQueryParam("ref");
if (ref) {
  localStorage.setItem("ref", ref);
  console.log("Referred by:", ref);
}
