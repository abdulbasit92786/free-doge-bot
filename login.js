// login.js

function telegramLogin(userId, name) {
    localStorage.setItem("tg_user_id", userId);
    localStorage.setItem("tg_user_name", name);
    alert("✅ Welcome " + name + "!");
}

function isLoggedIn() {
    return localStorage.getItem("tg_user_id") !== null;
}
