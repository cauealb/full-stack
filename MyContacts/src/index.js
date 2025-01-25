const express = require('express');
require('express-async-errors')
const route = require('../src/rotes')
const app = express();

app.use(express.json());
app.use(route)
app.use((error, request, response, next) => {
    console.log('####### ERROR')
    console.log(error);
    response.sendStatus(500)
})

app.listen(3000, () => console.log("Inicialização da porta na http://localhost:3000"))