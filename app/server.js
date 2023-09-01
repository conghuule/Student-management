const express = require("express");
const router = require("./routers/root.router");
const app = express();
const port = 3000;

//chuyen res,req ve json
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
