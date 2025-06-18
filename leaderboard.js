// leaderboard.js

const leaderboard = [
    { user: "User1", points: 420 },
    { user: "User2", points: 315 },
    { user: "User3", points: 280 }
];

function showLeaderboard() {
    let board = document.getElementById("leaderboard");
    leaderboard.forEach(item => {
        let row = document.createElement("div");
        row.textContent = `${item.user} - ${item.points} DOGE`;
        board.appendChild(row);
    });
}
