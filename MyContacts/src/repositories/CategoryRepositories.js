const db = require('../database')

class CategoryController {
    async findAll(orderBy = 'ASC') {
        const distination = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'
        const rows = await db.query(`
        SELECT * FROM category
        ORDER BY name ${distination};
        `)
        return rows;
    }

    async create({ name }) {
        const [row] = await db.query(`
        INSERT INTO category(name)
        VALUES($1)
        RETURNING * 
        `, [name])
        return row;
    }

    update() {

    }

    delete() {
        
    }
}

module.exports = new CategoryController()