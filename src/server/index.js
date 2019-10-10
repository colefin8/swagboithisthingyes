require("dotenv").config({ path: __dirname + "/../../.env" });

const lc = require("./listController");

const express = require("express");

const { SERVER_PORT } = process.env;

const app = express();

app.use(express.json());

//endpoints will go here

//get
app.get("/api/list", lc.fullList);
//post
app.post("/api/list", lc.addItem);
//put
app.put("/api/list", lc.editItem);

app.delete("/api/list/:index", lc.deleteItem);

app.listen(SERVER_PORT, () => {
  console.log(`His server... It's over ${SERVER_PORT}`);
});
