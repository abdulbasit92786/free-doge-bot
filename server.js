const express = require("express");
const app = express();
const cors = require("cors");
let users = {};

app.use(cors());
app.use(express.json());

app.post("/updateBalance", (req, res) => {
  const userId = req.query.user;
  if (!users[userId]) users[userId] = 0;
  users[userId] += 0.01;
  res.send({ balance: users[userId] });
});

app.get("/getBalance", (req, res) => {
  const userId = req.query.user;
  res.send({ balance: users[userId] || 0 });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
