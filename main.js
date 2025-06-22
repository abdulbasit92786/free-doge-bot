// Firebase Connection
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyACjHqz0QKAH2OnSpomh3OioYUW1qfmd6w",
  authDomain: "freedogeclam.firebaseapp.com",
  projectId: "freedogeclam",
  storageBucket: "freedogeclam.firebasestorage.app",
  messagingSenderId: "764273012962",
  appId: "1:764273012962:web:398a856b5b7c37c4396ebb",
  measurementId: "G-MC0HWPRTNT"
};

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let userID = "user_" + Math.floor(Math.random() * 1000000);
let taps = 0;

function updateUI() {
  document.getElementById("tapCount").innerText = taps;
}

// 👆 Tap handler
window.tapDoge = function () {
  taps++;
  updateUI();
  set(ref(db, 'users/' + userID), {
    taps: taps,
    taskEarnings: 1,
    refBonus: 0
  });
};

// 🔃 Load data on start
get(child(ref(db), `users/${userID}`)).then((snapshot) => {
  if (snapshot.exists()) {
    taps = snapshot.val().taps || 0;
    document.getElementById("tapCount").innerText = taps;
    document.getElementById("taskEarnings").innerText = snapshot.val().taskEarnings || 0;
    document.getElementById("refBonus").innerText = snapshot.val().refBonus || 0;
  }
});
