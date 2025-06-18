    "script.js": """

let balance = 0;

document.getElementById("tapBtn").onclick = function() {

  balance += 0.1;

  document.getElementById("balance").textContent = balance.toFixed(2);

};

"""

}
