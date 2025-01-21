const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send("Hello Word")
})

app.listen(3000, () => console.log("Inicialização da porta na http://localhost:3000"))