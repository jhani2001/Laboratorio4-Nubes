express = require("express");

app = express();

const clientes = Array(
  {
    id: 1,
    nome: "Jhanina",
    edad: "21",
  },
  {
    id: 2,
    nome: "Maria",
    edad: "22",
  },
  {
    id: 3,
    nome: "Ana",
    edad: "23",
  }
);

const productos = Array(
  {
    id: 1,
    nombre: "Laptop",
    precio: "2500",
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Teclado",
    precio: "60",
    cantidad: 2,
  },
  {
    id: 3,
    nombre: "Mouse",
    precio: "50",
    cantidad: 3,
  }
);

app.get("/clientes", function (req, res) {
  res.send(clientes);
});

app.get("/productos", function (req, res) {
  res.send(productos);
});

app.listen(3000);
