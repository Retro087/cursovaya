const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const app = express();
const port = 5000;

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "shop",
});

app.use(express.json());

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

app.post("/order", async (req, res) => {
  let id_lastClient = [];
  let id_lastCurier = [];
  let id_lastOrder = [];
  connection.query(
    "SELECT id_client FROM клиент ORDER BY id_client + 0",
    function (err, data) {
      if (err) return console.log(err);
      id_lastClient = data;
      connection.query("SELECT id_curier FROM курьер", function (err, data) {
        if (err) return console.log(err);
        id_lastCurier = data;

        let newIdClient;
        let newIdOrder;
        if (id_lastClient.length) {
          id_lastClient.forEach((i) => {
            newIdClient = +i.id_client + 1;
          });
        } else {
          newIdClient = "1";
        }
        if (id_lastCurier.length) {
          const random = Math.floor(Math.random() * id_lastCurier.length);
          id_lastCurier = id_lastCurier[random].id_curier;
        }
        if (id_lastOrder.length) {
          id_lastOrder.forEach((i) => {
            newIdOrder = +i.id_order + 1;
          });
        } else {
          newIdOrder = "1";
        }

        connection.query(
          "INSERT INTO клиент (familia, first_name, second_name, city, street, house, num, flat, id_client, id_curier) VALUES (?,?,?,?,?,?,?,?,?,?)",
          [
            req.body.familia,
            req.body.name,
            req.body.secName,
            req.body.city,
            req.body.street,
            req.body.house,
            req.body.num,
            req.body.flat,
            newIdClient.toString(),
            id_lastCurier,
          ],
          function (err, data) {
            if (err) return console.log(err);
          }
        );

        connection.query(
          "INSERT INTO заказ (id_order, id_menu, total_cost, id_curier, id_client) VALUES (?,?,?,?,?)",
          [
            newIdOrder,
            req.body.selected.join(", "),
            req.body.total_cost.toString(),
            id_lastCurier,
            newIdClient.toString(),
          ],
          function (err, data) {
            if (err) return console.log(err);
          }
        );

        connection.query(
          "UPDATE курьер SET id_order=? WHERE id_curier=?",
          [newIdOrder, id_lastCurier],
          function (err, data) {
            if (err) return console.log(err);
            connection.query(
              "SELECT * FROM курьер WHERE id_curier = ?",
              [id_lastCurier],
              function (err, data) {
                if (err) return console.log(err);
                res.json({
                  data,
                });
              }
            );
          }
        );
      });
    }
  );

  connection.query(
    "SELECT id_order FROM заказ ORDER BY id_order + 0",
    function (err, data) {
      if (err) return console.log(err);
      id_lastOrder = data;
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
