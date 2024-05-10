const express = require('express')

const app = express();

// Serializa os dados para JSON;
app.use(express.json());

// Faz com que o backend aceite requisições de qualquer origem;
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})

module.exports = app;