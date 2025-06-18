app.post("/withdraw", (req, res) => {
  const userId = req.body.user;
  const wallet = req.body.wallet;
  const amount = req.body.amount;

  if (users[userId] >= amount) {
    users[userId] -= amount;
    // یہاں اصلی withdrawal system کی API call کریں
    res.send({ status: "success", message: "Withdrawal Requested" });
  } else {
    res.status(400).send({ status: "error", message: "Insufficient balance" });
  }
});
