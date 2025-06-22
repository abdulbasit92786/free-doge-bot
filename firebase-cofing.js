import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
const config = { /* your firebase config */ };
const app = initializeApp(config);
export const db = getFirestore(app);
