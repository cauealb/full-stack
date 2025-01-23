const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'root',
    dataclient: 'mycontacts',
})

client.connect()

// exports.module = async (query) => {
//     const { rows } = await base.query(query)
//     return rows
// }

async function Query(query) {
    const { rows } = await client.query(query)
    return rows;
}

Query('SELECT * FROM category').then((item) => console.log(item))