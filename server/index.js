const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "CriptoDatabase",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM cripto;";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/api/insert", (req, res) => {
  const criptoName = req.body.criptoName;
  const criptoDesc = req.body.criptoDesc;
  const criptoCotacao = req.body.criptoCotacao;

  const sqlInsert =
    "INSERT INTO cripto (nm_cripto, ds_cripto, qt_cotacao_cripto, dt_inclusao_cripto) VALUES(?,?,?, current_date());";
  db.query(
    sqlInsert,
    [criptoName, criptoDesc, criptoCotacao],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Inserted Successfully");
      }
      console.log(result);
    }
  );
});

app.put("/api/update", (req, res) => {
  const id = req.body.criptoId;
  const cotacao = req.body.criptoCotacao;
  sqlUpdate =
    "UPDATE cripto SET qt_cotacao_cripto = ?, dt_update_cripto = current_date() WHERE id_cripto = ?;";
  db.query(sqlUpdate, [cotacao, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;
  sqlDelete = "DELETE FROM cripto WHERE id_cripto = ?";
  db.query(sqlDelete, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/api/search/:name", (req, res) => {
  const searchName = req.params.name;
  sqlSearch = "SELECT * FROM cripto WHERE nm_cripto = ?";
  db.query(sqlSearch, searchName, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
