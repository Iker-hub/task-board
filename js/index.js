const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require("./routes");

app.use("/posts", postsRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

//Connect to DB
mongoose.connect("mongodb://localhost:1888/tasksdb", () => {
  console.log("connect to DB!");
});

//How to we start listening to the server
app.listen(3000);

/*
async function main() {
  const uri = "mongodb://admin:admin@localhost:1888/?authMechanism=DEFAULT";
  const client = new mongodb.MongoClient(uri);
  try {
    await client.connect();
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  }
}

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

main().catch(console.error);

let task = {
  title: "Task title",
  content: "Task content",
};

let answer = {
  error: false,
  codigo: 200,
  mensaje: "",
};

app.route("/task").put(function (req, res) {
  if (!req.body.nombre || !req.body.apellido) {
    respuesta = {
      error: true,
      codigo: 502,
      mensaje: "El campo nombre y apellido son requeridos",
    };
  } else {
    if (usuario.nombre === "" || usuario.apellido === "") {
      respuesta = {
        error: true,
        codigo: 501,
        mensaje: "El usuario no ha sido creado",
      };
    } else {
      usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
      };
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: "Usuario actualizado",
        respuesta: usuario,
      };
    }
  }
  res.send(respuesta);
});

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});
*/
