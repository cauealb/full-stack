const express = require('express');
const route = require('../src/rotes')
const app = express();

app.use(route)

app.listen(3000, () => console.log("Inicialização da porta na http://localhost:3000"))