const { Client } = require('pg')

const dt = new Client({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'root',
    database: 'mycontacts',
})

dt.connect()

exports.module = async (query) => {
    const { rows } = await dt.query(query);
    return rows;
}