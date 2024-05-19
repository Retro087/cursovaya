const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 5000;

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "shop",
});

app.get("/menu/", (req, res) => {
  connection.query("SELECT * FROM меню", function (err, data) {
    if (err) return console.log(err);
    res.json({
      data,
    });
  });
});

app.patch("/add_in_cart/:id", (req, res) => {
  const id = req.params["id"];

  connection.query(
    "UPDATE меню SET in_cart = true WHERE id_menu=?",
    [id],
    function (err, data) {
      if (err) return console.log(err);
    }
  );
  connection.query(
    "SELECT * FROM меню WHERE id_menu = ?",
    [id],
    function (err, data) {
      if (err) return console.log(err);
      res.json({
        data,
      });
    }
  );
});

app.patch("/remove_in_cart/:id", (req, res) => {
  const id = req.params["id"];

  connection.query(
    "UPDATE меню SET in_cart = false WHERE id_menu=?",
    [id],
    function (err, data) {
      if (err) return console.log(err);
      res.json({
        data,
      });
    }
  );
});

app.get("/menu/in_cart", (req, res) => {
  connection.query(
    "SELECT * FROM меню WHERE in_cart=?",
    [true],
    function (err, data) {
      if (err) return console.log(err);
      res.json({
        data,
      });
    }
  );
});

connection.connect((err) => {
  if (err) throw error;
  console.log("успешно соединено с базой данных");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
