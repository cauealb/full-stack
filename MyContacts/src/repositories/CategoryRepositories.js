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

    async update(name, id) {
        const [row] = await db.query(`
        UPDATE category
        SET name = $1
        WHERE id = $2
        RETURNING *    
        `, [name, id])
        return row;
    }

    async delete(id) {
        await db.query(`
        DELETE FROM category
        WHERE id = $1    
        `, [id])
    }

    async findById(id) {
        const [row] = await db.query(`
        SELECT * FROM category WHERE id = $1    
        `, [id])
        return row;
    }
}

module.exports = new CategoryController()