const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    mesg: "Hello Backend, this is coming from Node.JS",
  });
});

app.listen(3000);
