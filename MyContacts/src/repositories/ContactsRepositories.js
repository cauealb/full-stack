const { v4 } = require('uuid')
const db = require('../../src/database')


let contacts = [
    {
        id: v4(),
        name: "Cauê",
        email: "cauealves@gmail.com",
        phone: "119773299885",
        category_id: v4()
    },
    {
        id: v4(),
        name: "Geovanna",
        email: "geovannaalvespitica@gmail.com",
        phone: "119773299885",
        category_id: v4()
    },
    {
        id: v4(),
        name: "Inaldo",
        email: "inaldo@gmail.com",
        phone: "119773299885",
        category_id: v4()
    },
    {
        id: v4(),
        name: "Cleide",
        email: "cleide@gmail.com",
        phone: "119773299885",
        category_id: v4()
    }
]

class ContactRepositores {
    async findAll(orderBy = 'ASC') {
        const distination = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'
        const rows = await db.query(`SELECT * FROM contacts ORDER BY name ${distination}`)
        return rows;
    }

    async findById(id) {
        const [row] = await db.query("SELECT * FROM contacts WHERE id = $1", [id])
        return row;
    }

    async findByEmail(email) {
        const [row] = await db.query("SELECT * FROM contacts WHERE email = $1", [email])
        return row;
    }

    async delete(id) {
        return new Promise((resolve) => {
            contacts = contacts.filter((item) => item.id != id)
            resolve();
        })
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
        return new Promise((resolve) => {
            const updateContact = {
                id,
                name, 
                email, 
                phone,
                category_id
            }

            contacts = contacts.map((item) => {
                return item.id === id ? updateContact  : item
            })

            resolve(updateContact)
        })
    }
}

module.exports = new ContactRepositores();