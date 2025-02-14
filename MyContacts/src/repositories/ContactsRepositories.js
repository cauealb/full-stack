const db = require('../../src/database')

class ContactRepositores {
    async findAll(orderBy = 'ASC') {
        const distination = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'
        const rows = await db.query(`
        SELECT contacts.*, category.name AS category_name 
        FROM contacts 
        LEFT JOIN category ON category.id = contacts.category_id
        ORDER BY contacts.name 
        ${distination}`)
        return rows;
    }

    async findById(id) {
        const [row] = await db.query(
        `SELECT contacts.*, category.name AS category_name 
        FROM contacts
        LEFT JOIN category ON category.id = contacts.category_id 
        WHERE contacts.id = $1`
        
        , [id])
        return row;
    }

    async findByEmail(email) {
        const [row] = await db.query("SELECT * FROM contacts WHERE email = $1", [email])
        return row;
    }

    async create({ name, email, phone, category_id }) {
        const [newRow] = await db.query(`
            INSERT INTO contacts(name, email, phone, category_id)
            VALUES($1, $2, $3, $4)
            RETURNING *
        `, [name, email, phone, category_id])
        return newRow
    }

    async update(id, { name, email, phone, category_id }) {
        const [row] = await db.query(`
        UPDATE contacts
        SET name = $1, email = $2, phone = $3, category_id = $4
        WHERE id = $5
        RETURNING *
        `, [name, email, phone, category_id, id])
        return row
    }

    async delete(id) {
        const deleteOp = await db.query(`
        DELETE FROM contacts
        WHERE id = $1 
        `, [id])
        return deleteOp
    }
}

module.exports = new ContactRepositores();