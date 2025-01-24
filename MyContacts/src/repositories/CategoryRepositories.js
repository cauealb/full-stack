const db = require('../database')

class CategoryController {
    findAll() {

    }

    async create({ name }) {
        const [row] = await db.query(`
        INSERT INTO(name)
        VALUES($1)
        RETURNING * 
        `, [name])
        return row
    }
}

module.exports = new CategoryController()