const express = require("express");
const app = express();
const port = 3000;

const sequelize = require("./database");

sequelize.sync({ force: true }).then(() => {
  console.log("db has been re sync");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
